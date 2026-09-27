import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Star, Truck, Shield, Headphones } from "lucide-react";
import { Product } from "../types";
import { productsAPI } from "../services/api";

const Home: React.FC = () => {
  const [trendingProducts, setTrendingProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrendingProducts = async () => {
      try {
        const products = await productsAPI.getTrending();
        setTrendingProducts(products.slice(0, 4)); // Show only 4 trending products
      } catch (error) {
        console.error("Error fetching trending products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingProducts();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="heading-primary text-white">
                مصنع الملابس
                <span className="block text-yellow-300 mt-2">
                  الرائد في التصنيع
                </span>
              </h1>
              <p className="text-xl text-gray-100 leading-relaxed max-w-2xl">
                نحن متخصصون في تصنيع الملابس عالية الجودة وتقديم خدمات التصنيع
                المخصصة للعملاء. من التصميم إلى الإنتاج، نحن نضمن الجودة والتميز
                في كل قطعة.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="btn-primary bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-center"
                >
                  تصفح المنتجات
                </Link>
                <Link
                  to="/manufacturing"
                  className="btn-outline border-white text-white hover:bg-white hover:text-blue-600 text-center"
                >
                  طلب تصنيع مخصص
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">لماذا تختارنا؟</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Star className="text-yellow-400" size={24} />
                    <span>جودة عالية ومواد ممتازة</span>
                  </div>
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Truck className="text-yellow-400" size={24} />
                    <span>توصيل سريع وموثوق</span>
                  </div>
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Shield className="text-yellow-400" size={24} />
                    <span>ضمان الجودة</span>
                  </div>
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Headphones className="text-yellow-400" size={24} />
                    <span>دعم فني 24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-secondary">خدماتنا المتميزة</h2>
            <p className="text-muted max-w-2xl mx-auto">
              نقدم مجموعة شاملة من الخدمات لتلبية احتياجاتك
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-hover text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">👔</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                تصنيع الملابس الجاهزة
              </h3>
              <p className="text-gray-600 leading-relaxed">
                مجموعة متنوعة من الملابس الجاهزة بأحدث التصاميم والألوان
              </p>
            </div>
            <div className="card-hover text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">✂️</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                تصنيع مخصص
              </h3>
              <p className="text-gray-600 leading-relaxed">
                تصميم وتصنيع ملابس مخصصة حسب مواصفاتك ومتطلباتك
              </p>
            </div>
            <div className="card-hover text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                التصميم والطباعة
              </h3>
              <p className="text-gray-600 leading-relaxed">
                خدمات التصميم والطباعة والتطريز على الملابس
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Products Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-secondary">المنتجات الرائجة</h2>
            <p className="text-muted">أحدث وأشهر منتجاتنا</p>
          </div>

          {loading ? (
            <div className="flex justify-center">
              <div className="text-lg">جاري التحميل...</div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {trendingProducts.map((product) => (
                <div
                  key={product.id}
                  className="card-hover group overflow-hidden"
                >
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.isTrending && (
                      <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                        <Star className="w-4 h-4 ml-1" />
                        رائج
                      </div>
                    )}
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-2xl font-bold text-blue-600">
                        {product.price} ج.م
                      </span>
                      <Link
                        to={`/products/${product.id}`}
                        className="btn-primary text-sm px-4 py-2"
                      >
                        عرض التفاصيل
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="btn-secondary inline-flex items-center gap-2"
            >
              عرض جميع المنتجات
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container-custom text-center">
          <h2 className="heading-primary text-white mb-6">
            هل لديك فكرة لتصميم مخصص؟
          </h2>
          <p className="text-xl mb-10 text-blue-100 max-w-2xl mx-auto leading-relaxed">
            تواصل معنا لتحويل أفكارك إلى واقع ملموس
          </p>
          <Link
            to="/manufacturing"
            className="btn-primary bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-10 py-4 inline-block"
          >
            ابدأ مشروعك الآن
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
