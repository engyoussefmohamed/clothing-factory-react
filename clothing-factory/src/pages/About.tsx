import React from "react";
import { CheckCircle, Users, Award, Clock, Shield, Heart } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">من نحن</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              مصنع الملابس - رائد في صناعة الملابس عالية الجودة منذ أكثر من 20
              عاماً
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">قصتنا</h2>
              <p className="text-lg text-gray-600 mb-6">
                بدأنا رحلتنا في عام 2003 بفريق صغير من الحرفيين المهرة، وهدف
                واحد واضح: تقديم ملابس عالية الجودة تجمع بين الأصالة والحداثة.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                على مر السنين، تطورنا من ورشة صغيرة إلى مصنع متكامل يخدم آلاف
                العملاء في جميع أنحاء المنطقة، مع الحفاظ على التزامنا بالجودة
                والابتكار.
              </p>
              <p className="text-lg text-gray-600">
                اليوم، نحن فخورون بأن نكون الخيار الأول للعملاء الذين يبحثون عن
                الجودة والتميز في عالم الموضة والملابس.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600"
                alt="مصنع الملابس"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-black p-4 rounded-lg">
                <div className="text-2xl font-bold">20+</div>
                <div className="text-sm">سنة من الخبرة</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">قيمنا</h2>
            <p className="text-xl text-gray-600">
              المبادئ التي نؤمن بها ونعمل بها
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">الجودة</h3>
              <p className="text-gray-600">
                نلتزم بأعلى معايير الجودة في كل منتج نصنعه، من اختيار المواد إلى
                التصنيع النهائي.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">الابتكار</h3>
              <p className="text-gray-600">
                نستمر في تطوير تقنياتنا وتصاميمنا لتقديم منتجات عصرية ومبتكرة.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">خدمة العملاء</h3>
              <p className="text-gray-600">
                رضا عملائنا هو أولويتنا القصوى، ونعمل بجد لتقديم أفضل تجربة
                ممكنة.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">الاستدامة</h3>
              <p className="text-gray-600">
                نؤمن بالمسؤولية البيئية ونستخدم مواد صديقة للبيئة في تصنيعنا.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">الالتزام بالمواعيد</h3>
              <p className="text-gray-600">
                نحترم مواعيد التسليم ونلتزم بها، لأن وقتك ثمين بالنسبة لنا.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">الموثوقية</h3>
              <p className="text-gray-600">
                عملاؤنا يثقون بنا لأننا نفي بوعودنا ونقدم منتجات تتجاوز
                توقعاتهم.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">أرقامنا تتحدث</h2>
            <p className="text-xl text-gray-300">إنجازاتنا في أرقام</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">
                50,000+
              </div>
              <div className="text-gray-300">عميل راضي</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">1M+</div>
              <div className="text-gray-300">قطعة ملابس مصنعة</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">20+</div>
              <div className="text-gray-300">سنة خبرة</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">99%</div>
              <div className="text-gray-300">معدل رضا العملاء</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">فريقنا</h2>
            <p className="text-xl text-gray-600">
              المحترفون الذين يجعلون كل شيء ممكناً
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300"
                alt="أحمد محمد"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">أحمد محمد</h3>
              <p className="text-blue-600 mb-2">المدير التنفيذي</p>
              <p className="text-gray-600 text-sm">
                خبير في صناعة الملابس مع أكثر من 25 عاماً من الخبرة
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300"
                alt="فاطمة علي"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">فاطمة علي</h3>
              <p className="text-blue-600 mb-2">مديرة التصميم</p>
              <p className="text-gray-600 text-sm">
                مصممة موهوبة متخصصة في الأزياء العصرية والكلاسيكية
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300"
                alt="محمد حسن"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">محمد حسن</h3>
              <p className="text-blue-600 mb-2">مدير الإنتاج</p>
              <p className="text-gray-600 text-sm">
                خبير في إدارة عمليات التصنيع وضمان الجودة
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">انضم إلى عائلة عملائنا</h2>
          <p className="text-xl mb-8 text-blue-100">
            اكتشف لماذا يختار آلاف العملاء مصنع الملابس
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              تصفح منتجاتنا
            </a>
            <a
              href="/manufacturing"
              className="border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              اطلب تصنيع مخصص
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
