const newsList = [
  { id: 1, title: "افزایش تولید پژو 207", date: "۱۰ آذر ۱۴۰۴", desc: "برنامه افزایش تولید خودرو پژو 207 جهت کاهش زمان انتظار مشتریان آغاز شد." },
  { id: 2, title: "عرضه نسخه جدید دنا پلاس", date: "۵ آذر ۱۴۰۴", desc: "نسخه جدید دنا پلاس با امکانات رفاهی بیشتر و موتور بهینه‌سازی شده ارائه گردید." },
  { id: 3, title: "اعلام برنامه فروش ویژه زمستان", date: "۱ آذر ۱۴۰۴", desc: "برنامه فروش ویژه زمستان شامل تخفیف‌های ویژه و شرایط اقساطی اعلام شد." },
];

export default function NewsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-[#003f7d] text-center mb-6">اخبار و اطلاعیه‌ها</h2>
      {newsList.map((news) => (
        <div key={news.id} className="bg-white p-6 rounded-xl shadow-md border-r-4 border-[#005bac]">
          <h3 className="text-xl font-bold text-[#005bac]">{news.title}</h3>
          <span className="text-xs text-gray-500 block my-2">تاریخ انتشار: {news.date}</span>
          <p className="text-gray-700 leading-relaxed mb-3">{news.desc}</p>
        </div>
      ))}
    </div>
  );
}