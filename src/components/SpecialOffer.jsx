import { watch3, headphone4, laptop4 } from '../constants';

const SpecialOffer = () => {
  return (
    <section className='text-center p-6 mt-[10rem]'>
      <h2 className='text-4xl font-bold'>Special <span className='text-amber-600'>Offers</span></h2>
      <div className='grid gap-6 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <div className='group bg-gray-300 p-6 rounded-xl flex flex-col items-center'>
          <img src={watch3} alt='Smart Watch' className='w-52 transition-transform duration-500 group-hover:rotate-90 group-hover:scale-125' />
          <h3 className='text-3xl font-bold mt-4'>Smart Watch</h3>
          <p className='text-xl font-medium'>$29.00</p>
        </div>
        <div className='group bg-gray-300 p-6 rounded-xl flex justify-between items-center'>
          <div>
            <h3 className='text-3xl font-bold'>Headphones</h3>
            <p className='text-xl'>$95.00</p>
          </div>
          <img src={headphone4} alt='Headphones' className='w-36 md:w-52 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-125' />
        </div>
        <div className='group bg-gray-300 p-6 rounded-xl flex justify-between items-center'>
          <div>
            <h3 className='text-3xl font-bold'>Laptops</h3>
            <p className='text-xl'>$69.00</p>
          </div>
          <img src={laptop4} alt='Laptop' className='w-52 transition-transform duration-500 group-hover:scale-125 group-hover:-translate-x-16' />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;


// import { watch3, headphone4, laptop4 } from "../constants"

// const SpecialOffer = () => {
//   return (
//     <section className="">
//         <h2 className="font-montserrat font-bold text-4xl text-center mb-12">Special <span className="text-amber-600">Offers</span></h2>
//         <div className="flex justify-center">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 cursor-pointer w-1/2">
//                 <div className="group col-span-1 p-6 bg-stone-300 rounded-xl">
//                     <img 
//                         src={watch3} 
//                         alt=""
//                         width={300}
//                         height={250}
//                         className=" mx-auto transform rotate-45 group-hover:rotate-90 group-hover:scale-125  transition duration-500" />
//                         <h2 className="font-montserrat text-3xl font-bold ">Smart Watch For Your Hand</h2>
//                         <p className="font-medium text-3xl">From $29.00</p>
//                 </div>
    
//                 <div className="grid grid-rows-2 gap-4 max-w-xl max-h-xl">
//                     <div className="group bg-stone-300 rounded-xl flex justify-between items-center p-4 cursor-pointer" >
//                         <div>
//                             <h2 className="font-montserrat text-3xl font-bold">Airpods and Head Phones</h2>
//                             <p className="font-medium text-2xl">From $95.00</p>
//                         </div>
//                         <img 
//                             src={headphone4} 
//                             alt=""
//                             width={200}
//                             height={200}
//                             className="transform scale-95 group-hover:rotate-12 group-hover:scale-110 transition duration-500" />
//                     </div>
//                     <div className="group bg-stone-300 rounded-xl flex justify-between items-center p-4 cursor-pointer">
//                         <div>
//                             <h2 className="font-montserrat text-3xl font-bold">Laptops</h2>
//                             <p className="font-medium text-2xl">From $69.00</p>
//                         </div>
//                         <img 
//                             src={laptop4} 
//                             alt=""
//                             width={250}
//                             height={250}
//                             className="transform group-hover:scale-125 group-hover:-translate-x-8 transition duration-500" />
//                     </div>
//                 </div>
//             </div>

//         </div>
        

//     </section>
//   )
// }

// export default SpecialOffer