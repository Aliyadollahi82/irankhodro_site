import Link from 'next/link';

export default function ServicesPage() {
  const servicesList = [
    {
      title: "نوبت‌دهی آنلاین نمایندگی‌ها",
      desc: "دریافت سریع نوبت برای سرویس‌های دوره‌ای، تعمیرات و بازرسی‌های فنی بدون نیاز به مراجعه حضوری.",
      icon: "🛠️",
    },
    {
      title: "امداد خودرو و پشتیبانی ۲۴ ساعته",
      desc: "ارائه خدمات امدادی جاده‌ای و شبانه‌روزی در تمام نقاط کشور با شماره ۰۲۱-۰۹۶۴۴۰.",
      icon: "🚨",
    },
    {
      title: "استعلام و اصالت قطعات یدکی",
      desc: "بررسی اصالت و گارانتی قطعات خریداری‌شده از شبکه نمایندگی‌ها و ایساکو.",
      icon: "🔍",
    },
    {
      title: "استعلام کارت گارانتی و سرویس‌ها",
      desc: "مشاهده وضعیت گارانتی خودرو، سوابق تعمیراتی و تاریخ انقضای کارت طلایی.",
      icon: "📄",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6 text-right">
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
        <h2 className="text-2xl font-bold text-[#003f7d] mb-2">خدمات پس از فروش و پشتیبانی</h2>
        <p className="text-gray-600 text-sm">
          ارائه کلیه خدمات گارانتی، سرویس‌های دوره‌ای و تأمین قطعات اصلی محصولات ایران‌خودرو
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {servicesList.map((service, idx) => (
          <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="text-3xl mb-3">{service.icon}</div>
            <h3 className="text-lg font-bold text-[#003f7d] mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.desc}</p>
            <button className="text-xs font-semibold text-[#005bac] hover:underline">
              اطلاعات بیشتر ←
            </button>
          </div>
        ))}
      </div>

      <div className="bg-[#003f7d] text-white p-6 rounded-xl text-center space-y-3">
        <h3 className="text-lg font-bold">نیاز به راهنمایی بیشتر دارید؟</h3>
        <p className="text-sm opacity-90">
          مرکز تماس و پاسخگویی به مشتریان ایران‌خودرو به‌صورت شبانه‌روزی آماده پاسخگویی است.
        </p>
        <div className="inline-block bg-white text-[#003f7d] font-bold px-6 py-2 rounded-lg text-lg">
          شماره تماس: ۰۹۶۴۴۰
        </div>
      </div>
    </div>
  );
}