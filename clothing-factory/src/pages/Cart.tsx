import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from "lucide-react";

const Cart: React.FC = () => {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems,
  } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    // Navigate to checkout page (to be implemented)
    navigate("/checkout");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              سلة التسوق فارغة
            </h1>
            <p className="text-gray-600 mb-8">
              لم تقم بإضافة أي منتجات إلى السلة بعد
            </p>
            <Link
              to="/products"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors inline-flex items-center"
            >
              <ArrowLeft className="h-5 w-5 ml-2" />
              تصفح المنتجات
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">سلة التسوق</h1>
          <p className="text-gray-600 mt-2">{getTotalItems()} منتج في السلة</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {items.map((item, index) => (
                <div
                  key={`${item.product.id}-${item.size}-${item.color}`}
                  className="border-b border-gray-200 last:border-b-0"
                >
                  <div className="p-6">
                    <div className="flex items-start space-x-4 rtl:space-x-reverse">
                      {/* Product Image */}
                      <div className="flex-shrink-0">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {item.product.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                          {item.product.description}
                        </p>
                        <div className="flex items-center space-x-4 rtl:space-x-reverse text-sm text-gray-500">
                          <span>المقاس: {item.size}</span>
                          <span>اللون: {item.color}</span>
                        </div>
                      </div>

                      {/* Price and Quantity */}
                      <div className="flex flex-col items-end space-y-4">
                        <div className="text-right">
                          <div className="text-lg font-semibold text-gray-900">
                            {item.product.price} ج.م
                          </div>
                          <div className="text-sm text-gray-500">
                            للقطعة الواحدة
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.size,
                                item.color,
                                item.quantity - 1
                              )
                            }
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.size,
                                item.color,
                                item.quantity + 1
                              )
                            }
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() =>
                            removeItem(item.product.id, item.size, item.color)
                          }
                          className="text-red-600 hover:text-red-800 transition-colors"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Clear Cart Button */}
            <div className="mt-4 text-right">
              <button
                onClick={clearCart}
                className="text-red-600 hover:text-red-800 transition-colors"
              >
                مسح السلة بالكامل
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                ملخص الطلب
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">عدد المنتجات:</span>
                  <span className="font-semibold">{getTotalItems()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">المجموع الفرعي:</span>
                  <span className="font-semibold">{getTotalPrice()} ج.م</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">رسوم التوصيل:</span>
                  <span className="font-semibold">
                    {getTotalPrice() >= 500 ? "مجاني" : "50 ج.م"}
                  </span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>المجموع الكلي:</span>
                    <span className="text-blue-600">
                      {getTotalPrice() >= 500
                        ? getTotalPrice()
                        : getTotalPrice() + 50}{" "}
                      ج.م
                    </span>
                  </div>
                </div>
              </div>

              {getTotalPrice() < 500 && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3 mb-6">
                  <p className="text-sm text-yellow-800">
                    أضف {500 - getTotalPrice()} ج.م أخرى للحصول على توصيل مجاني
                  </p>
                </div>
              )}

              <button
                onClick={handleCheckout}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                {isAuthenticated ? "إتمام الطلب" : "تسجيل الدخول لإتمام الطلب"}
              </button>

              <Link
                to="/products"
                className="block w-full text-center mt-4 text-blue-600 hover:text-blue-800 transition-colors"
              >
                متابعة التسوق
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
