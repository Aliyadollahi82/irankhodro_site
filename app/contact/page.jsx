'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMsg("پیام شما با موفقیت ارسال شد.");
  };

  return (
    <div className="flex justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-[#003f7d] text-center mb-6">فرم تماس با ما</h2>
        {msg && <div className="mb-4 text-green-700 bg-green-100 p-3 rounded-lg text-sm text-center">{msg}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="نام و نام خانوادگی" required className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-[#005bac]" />
          <input type="email" placeholder="ایمیل" required className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-[#005bac]" />
          <input type="text" placeholder="موضوع" required className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-[#005bac]" />
          <textarea rows="4" placeholder="پیام شما" required className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-[#005bac] resize-none"></textarea>
          <button type="submit" className="w-full bg-gradient-to-r from-[#005bac] to-[#003f7d] text-white py-3 rounded-xl font-semibold">ارسال پیام</button>
        </form>
      </div>
    </div>
  );
}