const dealers = [
  { city: "تهران", address: "خیابان ولیعصر، پلاک ۱۰، تهران", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.961123456!2d51.4215!3d35.6892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e01d1e0!2sTehran!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s" },
  { city: "مشهد", address: "بلوار احمدآباد، پلاک ۵، مشهد", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.961123456!2d59.6062!3d36.3100!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8f13e92!2sMashhad!5e0!3m2!1sen!2s!4v1600000000001!5m2!1sen!2s" },
];

export default function DealersPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-[#003f7d] text-center mb-6">نمایندگی‌های ایران‌خودرو</h2>
      {dealers.map((item, idx) => (
        <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-bold text-[#005bac] mb-1">نمایندگی {item.city}</h3>
          <p className="text-gray-600 mb-4 text-sm">{item.address}</p>
          <iframe src={item.map} className="w-full h-64 rounded-lg border-0" allowFullScreen="" loading="lazy"></iframe>
        </div>
      ))}
    </div>
  );
}