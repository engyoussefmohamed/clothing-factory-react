import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">CF</span>
              </div>
              <span className="text-2xl font-bold">مصنع الملابس</span>
            </div>
            <p className="text-gray-300 mb-4">
              نحن متخصصون في تصنيع الملابس عالية الجودة وتقديم خدمات التصنيع
              المخصصة للعملاء.
            </p>
            <div className="flex space-x-3 rtl:space-x-reverse">
              <button
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 text-gray-300 hover:text-white rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </button>
              <button
                className="w-10 h-10 bg-gray-800 hover:bg-blue-400 text-gray-300 hover:text-white rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </button>
              <button
                className="w-10 h-10 bg-gray-800 hover:bg-pink-600 text-gray-300 hover:text-white rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">روابط سريعة</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 block"
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 block"
                >
                  المنتجات
                </Link>
              </li>
              <li>
                <Link
                  to="/manufacturing"
                  className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 block"
                >
                  طلب تصنيع
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 block"
                >
                  عنا
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 block"
                >
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">خدماتنا</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">تصنيع الملابس الجاهزة</li>
              <li className="text-gray-300">تصنيع مخصص</li>
              <li className="text-gray-300">تصميم الملابس</li>
              <li className="text-gray-300">طباعة الشعارات</li>
              <li className="text-gray-300">تطريز مخصص</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">
              معلومات الاتصال
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone size={16} className="text-blue-400" />
                <span className="text-gray-300">+20 115 330 6833</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail size={16} className="text-blue-400" />
                <span className="text-gray-300">info@clothingfactory.com</span>
              </div>
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <MapPin size={16} className="text-blue-400 mt-1" />
                <span className="text-gray-300">
                  شارع الصناعة، المنطقة الصناعية، القاهرة، مصر
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 مصنع الملابس. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
