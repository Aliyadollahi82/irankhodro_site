'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-[#4678a4] flex items-center justify-center p-4">
      <div className="bg-[#f2f5f8] w-full max-w-md rounded-3xl p-8 shadow-2xl text-center space-y-4 border border-white/20">
        
        <div className="flex justify-center mb-1">
          <img 
            src="/images/logo-blue.png" 
            alt="ایران خودرو" 
            className="h-16 w-auto object-contain"
            onError={(e) => {
              e.currentTarget.src = '/images/logo.png';
            }}
          />
        </div>

        <h2 className="text-2xl font-bold text-[#003b73]">ثبت‌نام در سامانه</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="relative">
            <input
              type="text"
              placeholder="نام و نام خانوادگی"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full py-2.5 px-4 pl-10 bg-white border border-gray-300/60 rounded-xl text-right text-sm outline-none focus:border-[#00579c] transition-colors"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-base">
              👤
            </span>
          </div>

          <div className="relative">
            <input
              type="email"
              placeholder="sfsdfsdgf@gmail.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full py-2.5 px-4 pl-10 bg-[#e8f0fe] border border-gray-300/60 rounded-xl text-center text-sm outline-none focus:border-[#00579c] transition-colors"
              dir="ltr"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-base">
              ✉️
            </span>
          </div>

          <div className="relative">
            <input
              type="tel"
              placeholder="شماره تماس"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full py-2.5 px-4 pl-10 bg-white border border-gray-300/60 rounded-xl text-right text-sm outline-none focus:border-[#00579c] transition-colors"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-base">
              📞
            </span>
          </div>

          <div className="relative">
            <input
              type="password"
              placeholder="••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full py-2.5 px-4 pl-10 bg-[#e8f0fe] border border-gray-300/60 rounded-xl text-center text-sm outline-none focus:border-[#00579c] transition-colors"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-base">
              🔒
            </span>
          </div>

          <div className="relative">
            <input
              type="password"
              placeholder="تکرار رمز عبور"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              className="w-full py-2.5 px-4 pl-10 bg-white border border-gray-300/60 rounded-xl text-right text-sm outline-none focus:border-[#00579c] transition-colors"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-base">
              🔒
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-[#00529c] hover:bg-[#003f77] text-white py-3 rounded-xl font-bold transition-colors shadow-md text-sm mt-2"
          >
            ثبت‌نام
          </button>
        </form>

        <div className="text-xs text-gray-700 pt-1">
          قبلاً ثبت‌نام کرده‌اید؟{' '}
          <Link href="/login" className="text-[#00529c] font-bold hover:underline">
            ورود به سامانه
          </Link>
        </div>

      </div>
    </div>
  );
}