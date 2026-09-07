import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';

export default function ProductsPage() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-[#003f7d] mb-6">محصولات ایران‌خودرو</h2>
      
      <div className="flex flex-wrap justify-center gap-6">
        {products.map((item) => (
          <div key={item.id} className="bg-white w-72 p-4 rounded-xl shadow-md border border-gray-100 flex flex-col justify-between items-center">
            <div className="w-full">
              <div className="relative w-full h-44 mb-3">
                <Image 
                  src={item.img} 
                  alt={item.name} 
                  fill 
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-600 mt-1">قیمت: {item.price} تومان</p>
              <p className="text-xs text-gray-500 mt-2 line-clamp-2">{item.desc}</p>
            </div>
            
            <Link 
              href={`/products/${item.id}`} 
              className="mt-4 w-full bg-[#005bac] hover:bg-[#00498e] text-white py-2 rounded-lg text-sm font-semibold transition-colors block text-center"
            >
              مشاهده جزئیات
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}