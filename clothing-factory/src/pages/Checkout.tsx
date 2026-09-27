import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { ordersAPI } from "../services/api";
import type { Order } from "../types";

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { items, getTotalPrice, clearCart } = useCart();
  const { user, isAuthenticated } = useAuth();
  const [submitting, setSubmitting] = useState(false);
  const [notes, setNotes] = useState("");

  if (!isAuthenticated) {
    navigate("/login");
    return null;
  }

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;

    setSubmitting(true);
    try {
      const payload: Omit<Order, "id"> = {
        userId: user!.id,
        items: items.map((it) => ({
          productId: it.product.id,
          quantity: it.quantity,
          size: it.size,
          color: it.color,
        })),
        totalAmount: getTotalPrice(),
        // ensure we use the exact union value expected by Order['status']
        status: "pending",
        // match the Order.orderType literal from types
        orderType: "purchase",
        createdAt: new Date().toISOString().slice(0, 10),
        notes: notes || undefined,
      };

      const created = await ordersAPI.create(payload);
      if (!created) {
        // creation failed on the server side
        alert("حصل خطأ أثناء إنشاء الطلب");
        return;
      }
      // notify admin UI that a new order was created so it can refresh
      try {
        window.dispatchEvent(
          new CustomEvent("orders:created", { detail: created })
        );
      } catch (e) {
        // ignore in non-browser environments
      }

      clearCart();
      navigate(`/order/success/${created.id}`);
    } catch (err) {
      console.error(err);
      alert("حصل خطأ أثناء إنشاء الطلب");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6">إتمام الطلب</h1>
        <form
          onSubmit={handlePlaceOrder}
          className="bg-white rounded-lg shadow p-6 space-y-6"
        >
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              ملاحظات (اختياري)
            </label>
            <textarea
              className="w-full border rounded-md p-3"
              rows={4}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="أي ملاحظات للطلب..."
            />
          </div>
          <div className="border-t pt-4 flex items-center justify-between">
            <div className="text-lg">
              <span className="text-gray-600">الإجمالي: </span>
              <span className="font-semibold">{getTotalPrice()} ج.م</span>
            </div>
            <button
              type="submit"
              disabled={submitting || items.length === 0}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg disabled:opacity-50"
            >
              {submitting ? "جارٍ الإرسال..." : "تأكيد وإرسال الطلب"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
