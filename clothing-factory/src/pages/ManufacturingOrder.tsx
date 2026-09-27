import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { manufacturingOrdersAPI } from "../services/api";
import { ArrowLeft, CheckCircle } from "lucide-react";

const ManufacturingOrder: React.FC = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    quantity: "",
    size: "",
    color: "",
    fabricType: "",
    specialRequirements: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    setLoading(true);

    try {
      const orderData = {
        userId: user!.id,
        productName: formData.productName,
        description: formData.description,
        quantity: parseInt(formData.quantity),
        size: formData.size,
        color: formData.color,
        fabricType: formData.fabricType,
        specialRequirements: formData.specialRequirements,
        estimatedPrice: parseInt(formData.quantity) * 50, // Basic calculation
        status: "pending" as const,
        createdAt: new Date().toISOString(),
        estimatedDelivery: new Date(
          Date.now() + 21 * 24 * 60 * 60 * 1000
        ).toISOString(), // 21 days from now
      };

      const success = await manufacturingOrdersAPI.create(orderData);
      if (success) {
        setSuccess(true);
        setFormData({
          productName: "",
          description: "",
          quantity: "",
          size: "",
          color: "",
          fabricType: "",
          specialRequirements: "",
        });
      }
    } catch (error) {
      console.error("Error creating manufacturing order:", error);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              تم إرسال طلبك بنجاح!
            </h1>
            <p className="text-gray-600 mb-6">
              شكراً لك على اختيار مصنع الملابس. سنتواصل معك خلال 24 ساعة لتأكيد
              التفاصيل وتقديم عرض سعر دقيق.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setSuccess(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                إرسال طلب آخر
              </button>
              <button
                onClick={() => navigate("/")}
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                العودة للرئيسية
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate("/")}
            className="flex items-center text-blue-600 hover:text-blue-800 mb-4"
          >
            <ArrowLeft className="h-5 w-5 ml-2" />
            العودة للرئيسية
          </button>
          <h1 className="text-3xl font-bold text-gray-900">طلب تصنيع مخصص</h1>
          <p className="text-gray-600 mt-2">
            املأ النموذج أدناه لطلب تصنيع ملابس مخصصة حسب مواصفاتك
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Product Name */}
                <div>
                  <label
                    htmlFor="productName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    اسم المنتج المطلوب *
                  </label>
                  <input
                    type="text"
                    id="productName"
                    name="productName"
                    required
                    value={formData.productName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="مثال: قميص قطني مخصص"
                  />
                </div>

                {/* Description */}
                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    وصف مفصل للمنتج *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    required
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="صف المنتج المطلوب بالتفصيل..."
                  />
                </div>

                {/* Quantity and Size */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="quantity"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      الكمية المطلوبة *
                    </label>
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      min="1"
                      required
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="100"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="size"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      المقاس المطلوب *
                    </label>
                    <select
                      id="size"
                      name="size"
                      required
                      value={formData.size}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">اختر المقاس</option>
                      <option value="XS">XS</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                      <option value="XXL">XXL</option>
                      <option value="28">28</option>
                      <option value="30">30</option>
                      <option value="32">32</option>
                      <option value="34">34</option>
                      <option value="36">36</option>
                      <option value="38">38</option>
                      <option value="40">40</option>
                    </select>
                  </div>
                </div>

                {/* Color and Fabric */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="color"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      اللون المطلوب *
                    </label>
                    <input
                      type="text"
                      id="color"
                      name="color"
                      required
                      value={formData.color}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="مثال: أزرق داكن"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="fabricType"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      نوع القماش *
                    </label>
                    <select
                      id="fabricType"
                      name="fabricType"
                      required
                      value={formData.fabricType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">اختر نوع القماش</option>
                      <option value="قطن 100%">قطن 100%</option>
                      <option value="قطن + بوليستر">قطن + بوليستر</option>
                      <option value="بوليستر">بوليستر</option>
                      <option value="جينز">جينز</option>
                      <option value="صوف">صوف</option>
                      <option value="حرير">حرير</option>
                      <option value="أخرى">أخرى</option>
                    </select>
                  </div>
                </div>

                {/* Special Requirements */}
                <div>
                  <label
                    htmlFor="specialRequirements"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    متطلبات خاصة (اختياري)
                  </label>
                  <textarea
                    id="specialRequirements"
                    name="specialRequirements"
                    rows={3}
                    value={formData.specialRequirements}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="مثال: طباعة شعار الشركة، تطريز مخصص، إلخ..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                  >
                    {loading ? "جاري الإرسال..." : "إرسال الطلب"}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Info Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">
                معلومات مهمة
              </h3>
              <ul className="space-y-3 text-sm text-blue-800">
                <li>• الحد الأدنى للطلب: 50 قطعة</li>
                <li>• مدة التصنيع: 2-4 أسابيع</li>
                <li>• السعر التقديري: 50-100 ج.م للقطعة</li>
                <li>• سنتواصل معك خلال 24 ساعة</li>
                <li>• يمكن تخصيص التصميم والألوان</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                خدماتنا
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 ml-2">✓</span>
                  <span>تصميم مخصص</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 ml-2">✓</span>
                  <span>طباعة عالية الجودة</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 ml-2">✓</span>
                  <span>تطريز مخصص</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 ml-2">✓</span>
                  <span>ضمان الجودة</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 ml-2">✓</span>
                  <span>توصيل سريع</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManufacturingOrder;
