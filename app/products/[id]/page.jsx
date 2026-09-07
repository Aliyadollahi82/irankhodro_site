import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';

export default async function ProductDetailPage({ params }) {
  const resolvedParams = await params;
  const product = products.find((p) => p.id === parseInt(resolvedParams.id)) || products[0];

  return (
    <div className="flex justify-center">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg text-center border border-gray-100">
        <div className="relative w-full h-60 mb-4">
          <Image 
            src={product.img} 
            alt={product.name} 
            fill 
            className="object-cover rounded-lg"
          />
        </div>

        <h2 className="text-2xl font-bold text-[#003f7d] mb-2">{product.name}</h2>
        <p className="text-gray-700 font-semibold mb-2">
          قیمت: {product.price} تومان
        </p>
        <p className="text-gray-600 text-sm mb-4">{product.desc}</p>

        <h3 className="text-right font-bold text-[#003f7d] mb-2">مشخصات و ویژگی‌ها:</h3>
        <ul className="text-right text-sm leading-relaxed bg-gray-50 p-4 rounded-lg space-y-2 mb-6">
          {product.features.map((feature, idx) => (
            <li key={idx} className="list-disc list-inside text-gray-700">
              {feature}
            </li>
          ))}
        </ul>

        <Link 
          href={`/sale?id=${product.id}`}
          className="w-full bg-[#005bac] hover:bg-[#00498e] text-white py-3 rounded-lg font-semibold transition-colors block text-center"
        >
          ثبت سفارش
        </Link>
      </div>
    </div>
  );
}