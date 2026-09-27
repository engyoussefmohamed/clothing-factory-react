import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Product } from "../types";
import { productsAPI } from "../services/api";
import { useCart } from "../context/CartContext";
import {
  Star,
  ShoppingCart,
  Truck,
  Shield,
  RotateCcw,
} from "lucide-react";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;

      try {
        const productData = await productsAPI.getById(parseInt(id));
        if (productData) {
          setProduct(productData);
          setSelectedSize(productData.size[0] || "");
          setSelectedColor(productData.colors[0] || "");
        } else {
          navigate("/products");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        navigate("/products");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, navigate]);

  const handleAddToCart = () => {
    if (!product || !selectedSize || !selectedColor) return;

    addItem(product, quantity, selectedSize, selectedColor);
    // You could add a toast notification here
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-64">
            <div className="text-lg">جاري التحميل...</div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              المنتج غير موجود
            </h1>
            <button
              onClick={() => navigate("/products")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors"
            >
              العودة للمنتجات
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 rtl:space-x-reverse text-sm">
            <li>
              <button
                onClick={() => navigate("/")}
                className="text-blue-600 hover:text-blue-800"
              >
                الرئيسية
              </button>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <button
                onClick={() => navigate("/products")}
                className="text-blue-600 hover:text-blue-800"
              >
                المنتجات
              </button>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="aspect-square bg-white rounded-lg overflow-hidden mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <h1 className="text-3xl font-bold text-gray-900">
                  {product.name}
                </h1>
                {product.isTrending && (
                  <div className="mr-3 bg-yellow-500 text-white px-2 py-1 rounded-full text-sm flex items-center">
                    <Star className="h-4 w-4 ml-1" />
                    رائج
                  </div>
                )}
              </div>
              <p className="text-gray-600 text-lg">{product.description}</p>
            </div>

            {/* Price */}
            <div className="mb-6">
              <span className="text-3xl font-bold text-blue-600">
                {product.price} ج.م
              </span>
              <span className="text-gray-500 mr-2">
                المخزون: {product.stock} قطعة
              </span>
            </div>

            {/* Colors */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">الألوان المتاحة:</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-md border-2 transition-colors ${
                      selectedColor === color
                        ? "border-blue-600 bg-blue-50 text-blue-600"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">المقاسات المتاحة:</h3>
              <div className="flex flex-wrap gap-2">
                {product.size.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-md border-2 transition-colors ${
                      selectedSize === size
                        ? "border-blue-600 bg-blue-50 text-blue-600"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">الكمية:</h3>
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                >
                  -
                </button>
                <span className="text-lg font-semibold w-8 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() =>
                    setQuantity(Math.min(product.stock, quantity + 1))
                  }
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="mb-8">
              <button
                onClick={handleAddToCart}
                disabled={
                  !selectedSize || !selectedColor || product.stock === 0
                }
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <ShoppingCart className="h-5 w-5 ml-2" />
                إضافة إلى السلة
              </button>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center text-gray-600">
                <Truck className="h-5 w-5 ml-2" />
                <span>توصيل مجاني للطلبات أكثر من 500 ج.م</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Shield className="h-5 w-5 ml-2" />
                <span>ضمان الجودة لمدة 30 يوم</span>
              </div>
              <div className="flex items-center text-gray-600">
                <RotateCcw className="h-5 w-5 ml-2" />
                <span>إمكانية الإرجاع خلال 14 يوم</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="mt-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              تفاصيل المنتج
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">الفئة:</h3>
                <p className="text-gray-600">{product.category}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  تاريخ الإضافة:
                </h3>
                <p className="text-gray-600">
                  {new Date(product.createdAt).toLocaleDateString("ar-EG")}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  المقاسات المتاحة:
                </h3>
                <p className="text-gray-600">{product.size.join(", ")}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  الألوان المتاحة:
                </h3>
                <p className="text-gray-600">{product.colors.join(", ")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
