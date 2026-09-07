import Image from 'next/image';

interface CarItem {
  id: number;
  name: string;
  desc: string;
  img: string;
}

export default function HomePage() {
  const bestSellers: CarItem[] = [
    { id: 1, name: 'سمند EF7', desc: 'خودروی ملی', img: '/images/samand.jpg' },
    { id: 2, name: 'دنا پلاس', desc: 'محبوب و قدرتمند', img: '/images/dena.jpg' },
    { id: 3, name: 'پژو 207', desc: 'پرفروش‌ترین خودرو سال', img: '/images/207.jpg' },
    { id: 4, name: 'تارا اتوماتیک v4', desc: 'جدیدترین محصول ایران‌خودرو', img: '/images/tarav4.webp' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      <h2 className="text-center text-xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12">
        خودروهای پرفروش
      </h2>
      
      {/* چیدمان ۴ ستونه در دسکتاپ (lg:grid-cols-4) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {bestSellers.map((car) => (
          <div 
            key={car.id} 
            className="bg-white rounded-2xl shadow-md md:shadow-lg p-4 flex flex-col items-center border border-gray-100/60 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-full h-44 sm:h-40 lg:h-44 relative mb-4 rounded-xl overflow-hidden">
              <Image 
                src={car.img} 
                alt={car.name} 
                fill 
                className="object-cover rounded-xl" 
                unoptimized
              />
            </div>
            
            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 text-center">{car.name}</h3>
            <p className="text-xs md:text-sm text-gray-600 mb-1 text-center">{car.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}