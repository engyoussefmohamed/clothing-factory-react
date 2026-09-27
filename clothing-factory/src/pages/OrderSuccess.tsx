import React from "react";
import { Link, useParams } from "react-router-dom";

const OrderSuccess: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow p-8 text-center">
        <h1 className="text-2xl font-bold mb-2">تم إرسال طلبك بنجاح</h1>
        <p className="text-gray-700 mb-6">رقم الطلب: {id}</p>
        <Link
          to="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
        >
          الرجوع للصفحة الرئيسية
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
