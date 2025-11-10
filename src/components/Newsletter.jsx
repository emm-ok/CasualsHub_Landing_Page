

const Newsletter = () => {
  return (
    <section className="my-[5rem] flex flex-col justify-center items-center font-montserrat">
      <div>
        <h2 className="text-3xl sm:text-4xl xl:text-[60px] w-full font-bold font-cookie">
          Get Discount <span className="text-amber-600">30% </span>Off
        </h2>
        <div className="flex flex-col md:flex-row gap-4 items-center w-full mt-6">
          <input
            type="email"
            placeholder="YOUR EMAIL"
            className="px-4 md:px-8 text-md md:text-xl font-medium border-none bg-[#e8e8e8] outline-none shadow-lg md:w-[500px] w-[300px] h-[80px]"
          />
          <button className="text-md md:text-xl font-bold bg-gray-800 rounded-lg text-white shadow-md hover:bg-gray-700 uppercase px-6 py-4 xl:px-12 xl:py-6 h-[80px]">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;




// const Newsletter = () => {
//   return (
//     <section className=" m-12 flex flex-col xl:flex-row justify-between gap-12 items-center">
//         <h2 className="text-4xl xl:text-8xl w-2/3 font-bold font-cookie">Get Discount <span className="text-amber-600">30% </span>Off</h2>
//         <div className="flex items-center w-full xl:w-1/3">
//             <input 
//                 type="text" 
//                 placeholder="YOUR EMAIL"
//                 className="px-8 text-xl font-medium border-none bg-[#e8e8e8] outline-none shadow-lg w-[700px] h-[80px]"/>
//             <button className="text-xl font-bold bg-gray-800 rounded-lg text-white shadow-md hover:opacity-85 uppercase px-12 py-6 h-[80px]">Subscribe</button>
//         </div>
//     </section>
//   )
// }

// export default Newsletter