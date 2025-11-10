import { useState } from 'react';
import { ProductCard } from '../components';
import { popularProducts } from '../constants';

const Popular = () => {
  const [activeCategory, setActiveCategory] = useState(popularProducts[0]?.title || '');
  

  return (
    <section className='px-20 my-[5rem]'>
      <h2 className='text-3xl md:text-4xl font-bold'>Most Popular</h2>
      <div className=' mt-8 flex gap-6 overflow-x-auto whitespace-nowrap border-b-2 pb-2'>
        {popularProducts.map(({ title }) => (
          <span
            key={title}
            className={`uppercase text-lg cursor-pointer ${title === activeCategory ? 'font-bold border-b-4 border-gray-800' : 'text-gray-500'}`}
            onClick={() => setActiveCategory(title)}
          >
            {title}
          </span>
        ))}
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6'>
        {popularProducts
          .find(({ title }) => title === activeCategory)?.products
          .map((product) => <ProductCard key={product.id} {...product}  />)}
      </div>
    </section>
  );
};

export default Popular;

// import { useState } from "react";
// import { ProductCard } from "../components";
// import { popularProducts } from "../constants";

// const Popular = () => {
//   // State to track active category
//   const [activeCategory, setActiveCategory] = useState(popularProducts[0]?.title || "");

//   return (
//     <section className="w-full">
//       <div className="p-6">
//         <h2 className="text-4xl font-bold">Most Popular</h2>

//         {/* Category Titles */}
//         <ul className="mt-4 flex items-center gap-10 border-b-2 pb-2">
//           {popularProducts.map((subProduct) => (
//             <li
//               key={subProduct.title}
//               className={`uppercase text-xl cursor-pointer transition duration-300 ${
//                 activeCategory === subProduct.title
//                   ? "font-bold text-amber-700 border-b-4 border-amber-800"
//                   : "text-gray-500"
//               }`}
//               onClick={() => setActiveCategory(subProduct.title)}
//             >
//               {subProduct.title}
//             </li>
//           ))}
//         </ul>

//         {/* Ensure Only One Set of Products is Rendered */}
//         <div className="grid grid-cols-4 gap-6 mt-6">
//           {popularProducts
//             .filter((subProduct) => subProduct.title === activeCategory) // Ensure only one category is active
//             .flatMap((subProduct) => subProduct.products) // Extract products
//             .map((product) => <ProductCard key={product.name} {...product} />)}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Popular;

