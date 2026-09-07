'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { products } from '@/data/products';

function SaleFormContent() {
  const searchParams = useSearchParams();
  const selectedId = searchParams.get('id');

  const [formData, setFormData] = useState({
    fullName: '',
    nationalId: '',
    phone: '',
    selectedCar: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedId) {
      const found = products.find((p) => p.id === parseInt(selectedId));
      if (found) {
        setFormData((prev) => ({ ...prev, selectedCar: found.name }));
      }
    } else if (products.length > 0) {
      setFormData((prev) => ({ ...prev, selectedCar: products[0].name }));
    }
  }, [selectedId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-md max-w-md mx-auto text-center border border-gray-100">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
          ✓
        </div>
        <h3 className="text-xl font-bold text-[#003f7d] mb-2">ثبت درخواست با موفقیت انجام شد</h3>
        <p className="text-gray-600 text-sm mb-4">
          کد پیگیری شما: <span className="font-bold text-[#005bac]">IKCO-{Math.floor(100000 + Math.random() * 900000)}</span>
        </p>
        <p className="text-xs text-gray-500 leading-relaxed">
          اطلاعات ثبت‌شده برای خودروی <b>{formData.selectedCar}</b> بررسی خواهد شد و نتیجه از طریق پیامک ارسال می‌گردد.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md border border-gray-100">
      <h2 className="text-2xl font-bold text-[#003f7d] mb-6 text-center">فرم ثبت‌نام و درخواست خودرو</h2>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1 text-right">نام و نام خانوادگی</label>
          <input
            type="text"
            name="fullName"
            required
            placeholder="مثال: علی محمدی"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-2.5 border border-gray-300 rounded-lg outline-none focus:border-[#005bac] text-right"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1 text-right">کد ملی</label>
          <input
            type="text"
            name="nationalId"
            required
            maxLength={10}
            placeholder="۱۰ رقم کد ملی"
            value={formData.nationalId}
            onChange={handleChange}
            className="w-full p-2.5 border border-gray-300 rounded-lg outline-none focus:border-[#005bac] text-center"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1 text-right">شماره همراه</label>
          <input
            type="tel"
            name="phone"
            required
            placeholder="09123456789"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2.5 border border-gray-300 rounded-lg outline-none focus:border-[#005bac] text-center"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1 text-right">انتخاب خودرو</label>
          <select
            name="selectedCar"
            value={formData.selectedCar}
            onChange={handleChange}
            className="w-full p-2.5 border border-gray-300 rounded-lg outline-none focus:border-[#005bac] text-right bg-white"
          >
            {products.map((car) => (
              <option key={car.id} value={car.name}>
                {car.name} ({car.price} تومان)
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="mt-2 w-full bg-[#005bac] hover:bg-[#00498e] text-white py-3 rounded-lg font-semibold transition-colors"
        >
          ارسال درخواست فروش
        </button>
      </form>
    </div>
  );
}

export default function SalePage() {
  return (
    <Suspense fallback={<div className="text-center py-10">در حال بارگذاری فرم...</div>}>
      <SaleFormContent />
    </Suspense>
  );
}