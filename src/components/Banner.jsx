import { headphone6, laptop1 } from "../constants"

const Banner = () => {
  return (
    <section className="relative bg-slate-600 w-full h-[300px] md:h-[600px] overflow-hidden p-12">
        <img 
            src={headphone6} 
            alt="HeadPhone 5"

            className="absolute object-contain w-[300px] lg:w-[700px] lg:h-[300px] bottom-[100px] -right-[100px] transform rotate-45" />
        <img 
            src={laptop1} 
            alt="Laptop 5"
            
            className="absolute object-contain -top-[100px] w-[500px] lg:w-[900px] lg:h-[500px] left-2 right-2" />
        <div className="absolute w-full left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] text-center">
            <h2 className="font-medium text-3xl md:text-[50px] font-montserrat text-white">Smart Fashion</h2>
            <h1 className="font-bold text-4xl md:text-[70px] font-montserrat  text-white">With Smart Devices</h1>
        </div>
    </section>
  )
}

export default Banner