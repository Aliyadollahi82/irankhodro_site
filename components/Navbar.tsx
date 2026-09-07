import Link from 'next/link';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'خانه', href: '/' },
  { name: 'درباره ما', href: '/about' },
  { name: 'محصولات', href: '/products' },
  { name: 'فروش اینترنتی', href: '/sale' },
  { name: 'خدمات پس از فروش', href: '/services' },
  { name: 'نمایندگی‌ها', href: '/dealers' },
  { name: 'اخبار و اطلاعیه‌ها', href: '/news' },
  { name: 'پیگیری سفارش', href: '/order-status' },
  { name: 'تماس با ما', href: '/contact' },
];

export default function Navbar() {
  return (
    <nav className="bg-[#003f7d] p-3 flex justify-center gap-4 flex-wrap">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-white text-sm md:text-base px-3 py-1.5 rounded-md hover:bg-[#005bac] transition-colors"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}