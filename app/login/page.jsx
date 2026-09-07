'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-[#4678a4] flex items-center justify-center p-4">
      <div className="bg-[#f2f5f8] w-full max-w-md rounded-3xl p-8 shadow-2xl text-center space-y-6 border border-white/20">
        
        {/* لوگو */}
        <div className="flex justify-center mb-2">
          <img 
            src="/images/logo-blue.png" 
            alt="ایران خودرو" 
            className="h-16 w-auto object-contain"
            onError={(e) => {
              e.currentTarget.src = '/images/logo.png';
            }}
          />
        </div>

        <h2 className="text-2xl font-bold text-[#003b73]">ورود به سامانه</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="sfsdfsdgf@gmail.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full py-3 px-4 pl-10 bg-[#e8f0fe] border border-gray-300/60 rounded-xl text-center text-sm outline-none focus:border-[#00579c] transition-colors"
              dir="ltr"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg">
              ✉️
            </span>
          </div>

          <div className="relative">
            <input
              type="password"
              placeholder="••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full py-3 px-4 pl-10 bg-[#e8f0fe] border border-gray-300/60 rounded-xl text-center text-sm outline-none focus:border-[#00579c] transition-colors"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg">
              🔒
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-[#00529c] hover:bg-[#003f77] text-white py-3 rounded-xl font-bold transition-colors shadow-md text-sm"
          >
            ورود به سامانه
          </button>
        </form>

        <div className="text-xs text-gray-700 pt-2">
          حساب کاربری ندارید؟{' '}
          <Link href="/register" className="text-[#00529c] font-bold hover:underline">
            ثبت‌نام کنید
          </Link>
        </div>

      </div>
    </div>
  );
}