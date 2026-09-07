'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'خانه', href: '/' },
    { name: 'درباره ما', href: '/about' },
    { name: 'محصولات', href: '/products' },
    { name: 'فروش اینترنتی', href: '/sale' },
    { name: 'خدمات پس از فروش', href: '/services' },
    { name: 'نمایندگی‌ها', href: '/dealers' },
    { name: 'اخبار و اطلاعیه‌ها', href: '/news' },
    { name: 'تماس با ما', href: '/contact' },
  ];

  return (
    <header className="w-full">
      {/* بخش بالایی: لوگو و عنوان */}
      <div className="bg-[#00579c] py-4 md:py-6 flex flex-col items-center justify-center text-center px-4">
        <div className="flex flex-col items-center justify-center gap-2">
          <img 
            src="/images/logo.png" 
            alt="سامانه ایران خودرو" 
            className="h-12 md:h-16 w-auto object-contain mx-auto block"
          />
          <h1 className="text-white text-lg md:text-2xl font-bold tracking-wide mt-1">
            سامانه ایران خودرو
          </h1>
        </div>
      </div>
      
      {/* بخش پایینی: نوار منو */}
      <nav className="bg-[#003b73] relative">
        <div className="max-w-7xl mx-auto px-4 flex justify-between md:justify-center items-center py-2 md:py-3">
          
          {/* دکمه منوی همبرگری (فقط در موبایل) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
              ) : (
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              )}
            </svg>
          </button>
          
          <span className="md:hidden text-white text-xs font-semibold">منوی دسترسی</span>

          {/* منوی دسکتاپ */}
          <div className="hidden md:flex justify-center gap-6 flex-wrap">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white text-sm font-semibold hover:text-gray-300 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* منوی کشویی موبایل با انیمیشن نرم */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#002e5c] border-t border-blue-900/50 ${
            isOpen ? 'max-h-96 opacity-100 py-3' : 'max-h-0 opacity-0 py-0'
          }`}
        >
          <div className="px-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-white text-sm py-2 px-3 rounded hover:bg-[#003b73] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}