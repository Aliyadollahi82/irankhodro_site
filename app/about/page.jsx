import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md border border-gray-100 text-right">
      <div className="relative w-full h-52 mb-6 rounded-lg overflow-hidden">
        <Image 
          src="/images/IKCO_Logo.png" 
          alt="درباره ایران خودرو" 
          fill 
          className="object-contain p-4 bg-gray-50"
        />
      </div>

      <h2 className="text-2xl font-bold text-[#003f7d] mb-4 text-center">
        درباره سامانه ایران‌خودرو
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6 text-justify">
        شرکت ایران‌خودرو به عنوان بزرگ‌ترین شرکت خودروسازی ایران و منطقه، همواره در تلاش است تا با بهره‌گیری از تکنولوژی روز و ارتقای کیفیت محصولات، خدمات شایسته‌ای به مشتریان خود ارائه دهد. این سامانه جهت تسهیل در امر اطلاع‌رسانی، معرفی محصولات، پیگیری سفارشات و ثبت‌نام اینترنتی خودروهای تولیدی طراحی شده است.
      </p>

      <div className="bg-gray-50 p-5 rounded-lg border-r-4 border-[#005bac] mb-6">
        <h3 className="text-lg font-bold text-[#003f7d] mb-2">اهداف و چشم‌اندازها:</h3>
        <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
          <li>ارائه خودروهای ایمن، مدرن و با استاندارد روز</li>
          <li>افزایش رضایت‌مندی مشتریان از طریق خدمات پس از فروش گسترده</li>
          <li>توسعه پلتفرم‌های اختصاصی و بومی‌سازی قطعات پیشرفته</li>
          <li>تسهیل فرایند ثبت‌نام و تحویل به‌موقع خودروها</li>
        </ul>
      </div>

      <div className="text-center text-sm text-gray-500 pt-4 border-t border-gray-100">
        ارتباط مستقیم با واحد پشتیبانی و پاسخگویی: <span className="font-bold text-[#003f7d]">۰۲۱-۰۹۶۴۴۰</span>
      </div>
    </div>
  );
}