'use client';

import { useState } from 'react';

export default function OrderStatusPage() {
  const [trackingCode, setTrackingCode] = useState('');
  const [nationalId, setNationalId] = useState('');
  const [result, setResult] = useState(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearched(true);

    // شبیه‌سازی استعلام وضعیت سفارش
    if (trackingCode.length > 3 || nationalId.length === 10) {
      setResult({
        orderId: trackingCode || 'IKCO-849201',
        carName: 'دنا پلاس',
        status: 'در حال تخصیص پلاک و آماده‌سازی سند',
        step: 3, // از 4 مرحله
        date: '۱۴۰۳/۰۵/۲۰',
        customerName: 'کاربر محترم',
      });
    } else {
      setResult(null);
    }
  };

  return (
    <div className="max-w-xl mx-auto space-y-6 text-right">
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
        <h2 className="text-2xl font-bold text-[#003f7d] mb-2 text-center">
          سامانه پیگیری وضعیت سفارش
        </h2>
        <p className="text-gray-600 text-sm mb-6 text-center">
          جهت مشاهده آخرین وضعیت ثبت‌نام، کد پیگیری یا کد ملی خود را وارد کنید.
        </p>

        <form onSubmit={handleSearch} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              کد پیگیری خرید
            </label>

            <input
              type="text"
              placeholder="مثال: IKCO-849201"
              value={trackingCode}
              onChange={(e) => setTrackingCode(e.target.value)}
              className="w-full p-2.5 border border-gray-300 rounded-lg outline-none focus:border-[#005bac] text-center dir-ltr"
            />
          </div>

          <div className="text-center text-xs text-gray-400">یا</div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              کد ملی متقاضی
            </label>
            <input
              type="text"
              maxLength={10}
              placeholder="۱۰ رقم کد ملی"
              value={nationalId}
              onChange={(e) => setNationalId(e.target.value)}
              className="w-full p-2.5 border border-gray-300 rounded-lg outline-none focus:border-[#005bac] text-center"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#005bac] hover:bg-[#00498e] text-white py-3 rounded-lg font-semibold transition-colors mt-2"
          >
            استعلام وضعیت
          </button>
        </form>
      </div>

      {/* نمایش نتیجه استعلام */}
      {searched && result && (
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 space-y-4">
          <div className="flex justify-between items-center border-b border-gray-100 pb-3">
            <span className="text-xs bg-blue-100 text-[#003f7d] px-2.5 py-1 rounded-full font-bold">
              {result.orderId}
            </span>
            <h3 className="font-bold text-[#003f7d]">جزئیات سفارش {result.carName}</h3>
          </div>

          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex justify-between">
              <span>وضعیت فعلی:</span>
              <span className="font-bold text-green-600">{result.status}</span>
            </div>
            <div className="flex justify-between">
              <span>تاریخ ثبت اولیه:</span>
              <span>{result.date}</span>
            </div>
          </div>

          {/* نوار پیشرفت ۴ مرحله‌ای */}
          <div className="pt-4">
            <div className="grid grid-cols-4 gap-2 text-center text-xs font-semibold text-gray-600 mb-2">
              <span className="text-green-600">ثبت اولیه</span>
              <span className="text-green-600">تأیید مالی</span>
              <span className="text-[#005bac] font-bold">تخصیص خودرو</span>
              <span className="text-gray-400">تحویل</span>
            </div>
            <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">
              <div className="bg-[#005bac] h-full w-3/4 transition-all duration-500"></div>
            </div>
          </div>
        </div>
      )}

      {searched && !result && (
        <div className="bg-red-50 text-red-600 p-4 rounded-xl text-center text-sm border border-red-100">
          اطلاعاتی با مشخصات وارد شده پیدا نشد. لطفاً کد ملی یا کد پیگیری را مجدداً بررسی کنید.
        </div>
      )}
    </div>
  );
}