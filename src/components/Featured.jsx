import { headphone7, laptop6 } from '../constants';
import Button from './Button';

const Featured = () => {
  return (
    <section className='px-8 py-20 max-container'>
      <div className='text-center mt-20'>
        <h2 className='font-bold text-4xl md:text-[60px] font-montserrat'>Featured <span className='text-amber-600'>Offers</span></h2>
        <p className='text-lg md:text-2xl font-montserrat text-slate-gray mt-4'>Choose from a variety of products before time runs out!</p>
      </div>
      
      <div className='mt-16 flex flex-wrap justify-center gap-8'>
        {[{ name: "Bluetooth Headphone", price: "$38.50", image: headphone7 },
          { name: "Macbook Air M2", price: "$38.50", image: laptop6 }].map((product, index) => (
          <div key={index} className='relative group p-6 shadow-md border border-stone-400 rounded-lg w-full max-w-sm md:max-w-md lg:max-w-lg flex flex-col items-center gap-6'>
            <div className="absolute inset-0 group-hover:bg-black opacity-30 rounded-lg"></div>
            <h2 className='text-center font-bold text-2xl md:text-3xl'>{product.name}</h2>
            <p className='text-xl md:text-2xl font-bold text-slate-gray'><span className='line-through font-medium'>$48.50</span> {product.price}</p>
            <img src={product.image} alt={product.name} className='object-contain w-2/3 h-auto' />
            <div className='flex justify-center gap-6'>
              {["HRS", "MINS", "SECS"].map((label, idx) => (
                <div key={idx} className='flex flex-col items-center'>
                  <div className='flex justify-center items-center border border-amber-600 w-16 h-16 md:w-20 md:h-20 rounded-full'>
                    <span className='flex justify-center items-center border border-slate-gray text-lg md:text-2xl w-full h-full rounded-full'>0</span>
                  </div>
                  <p className='text-sm md:text-lg font-bold uppercase'>{label}</p>
                </div>
              ))}
            </div>
            <div className='flex gap-4 justify-center items-center transform group-hover:-translate-y-10 scale-0 group-hover:scale-100 transition duration-500'>
              <Button label='Buy now' size='w-32 h-12 md:w-40 md:h-16' fontFamily='font-cookie text-lg md:text-2xl' />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;


// import { headphone7, laptop1, laptop2, laptop3, laptop4, laptop5, laptop6, watch4 } from '../constants'
// import Button from './Button'

// const Featured = () => {
//   return (
//     <section className='p-60 max-container'>
//         <div className='text-center mt-[200px]'>
//             <h2 className='font-bold text-8xl font-montserrat'>Featured <span className='text-amber-600'>Offers</span></h2>
//             <p className='text-2xl font-montserrat text-slate-gray'>There are variations of products avaible pick any of your choice before times runs out</p>
//         </div>
//         <div className='mt-20 flex justify-between items-center gap-4'>

//             <div className='relative group p-6 shadow-md border-2 border-stone-400 rounded-lg w-[700px] flex flex-col gap-10 justify-between items-center'>
//                 <div className="absolute inset-0 group-hover:bg-black opacity-30 z-0 rounded-lg"></div>
//                 <h2 className='text-center font-bold text-4xl'>Bluetooth Headphone</h2>
//                 <p className='text-3xl font-bold text-slate-gray'><span className='line-through font-medium'>$48.50</span> $38.50</p>
//                 <img 
//                     src={headphone7} 
//                     alt=""
//                     className='object-contain w-1/2 h-1/3' />
//                 <div className='flex items-center justify-center gap-16'>
//                     <div>
//                         <div className='flex justify-center items-center p-2 border border-amber-600 w-[100px] h-[100px] rounded-full'>
//                             <span className='flex justify-center items-center p-4 border border-slate-gray text-4xl w-full h-full rounded-full'>0</span>
//                         </div>
//                         <p className='text-2xl font-bold uppercase text-center'>HRS</p>
//                     </div>
//                     <div>
//                         <div className='flex justify-center items-center p-2 border border-amber-600 w-[100px] h-[100px] rounded-full'>
//                             <span className='flex justify-center items-center p-4 border border-slate-gray text-4xl w-full h-full rounded-full'>0</span>
//                         </div>
//                         <p className='text-2xl font-bold uppercase text-center'>Mins</p>
//                     </div>
//                     <div>
//                         <div className='flex justify-center items-center p-2 border border-amber-600 w-[100px] h-[100px] rounded-full'>
//                             <span className='flex justify-center items-center p-4 border border-slate-gray text-4xl w-full h-full rounded-full'>0</span>
//                         </div>
//                         <p className='text-2xl font-bold uppercase text-center'>Secs</p>
//                     </div>
//                 </div>
//                 <div className='flex z-10 gap-4 justify-center items-center transform group-hover:-translate-y-64 scale-0 group-hover:scale-100 transition duration-500'>
//                 <Button 
//                     label='Buy now'
//                     size='w-52 h-28'
//                     fontFamily='font-cookie text-xl xl:text-4xl' />
//                 </div>
//             </div>
//             <div className='relative group p-6 shadow-md border-2 border-stone-400 rounded-lg w-[700px] flex flex-col gap-10 justify-between items-center'>
//                 <div className="absolute inset-0 group-hover:bg-black opacity-30 z-0 rounded-lg"></div>
//                 <h2 className='text-center font-bold text-4xl'>Macbook Air M2</h2>
//                 <p className='text-3xl font-bold text-slate-gray'><span className='line-through font-medium'>$48.50</span> $38.50</p>
//                 <img 
//                     src={laptop6} 
//                     alt=""
//                     className='object-contain w-1/2 h-1/3' />
//                 <div className='flex items-center justify-center gap-16'>
//                     <div>
//                         <div className='flex justify-center items-center p-2 border border-amber-600 w-[100px] h-[100px] rounded-full'>
//                             <span className='flex justify-center items-center p-4 border border-slate-gray text-4xl w-full h-full rounded-full'>0</span>
//                         </div>
//                         <p className='text-2xl font-bold uppercase text-center'>HRS</p>
//                     </div>
//                     <div>
//                         <div className='flex justify-center items-center p-2 border border-amber-600 w-[100px] h-[100px] rounded-full'>
//                             <span className='flex justify-center items-center p-4 border border-slate-gray text-4xl w-full h-full rounded-full'>0</span>
//                         </div>
//                         <p className='text-2xl font-bold uppercase text-center'>Mins</p>
//                     </div>
//                     <div>
//                         <div className='flex justify-center items-center p-2 border border-amber-600 w-[100px] h-[100px] rounded-full'>
//                             <span className='flex justify-center items-center p-4 border border-slate-gray text-4xl w-full h-full rounded-full'>0</span>
//                         </div>
//                         <p className='text-2xl font-bold uppercase text-center'>Secs</p>
//                     </div>
//                 </div>
//                 <div className='flex z-10 gap-4 justify-center items-center transform group-hover:-translate-y-64 scale-0 group-hover:scale-100 transition duration-500'>
//                     <Button 
//                         label='Buy now'
//                         size='w-52 h-28'
//                         fontFamily='font-cookie text-xl xl:text-4xl' />
//                 </div>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Featured