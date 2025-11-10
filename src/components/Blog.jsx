import { FaCalendar, FaUser } from "react-icons/fa";
import { blogPosts } from "../constants";
import { Button } from "../components";
import { Link } from "react-router-dom";

const Blog = () => {
  const handleProductClick = (e) => {
    e.stopPropagation();
    window.scrollTo(0, 0);
  };

  return (
    <section className="px-4 sm:px-8 md:px-12 py-16 bg-gray-200">
      <h2 className="text-center text-3xl sm:text-4xl font-bold font-montserrat">Latest Blogs</h2>
      <p className="text-center text-base sm:text-lg font-montserrat mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
        {blogPosts.slice(0, 3).map((blog) => (
          <div
            key={blog.id}
            className="w-full max-w-sm bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transition-transform duration-300 hover:scale-95"
          >
            <img
              src={blog.img}
              alt={blog.name}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <div className="flex justify-between text-sm text-gray-600 mb-4">
                <p className="flex items-center gap-2"><FaUser /> {blog.name}</p>
                <p className="flex items-center gap-2"><FaCalendar /> {blog.date}</p>
              </div>

              <Link to={`/blog/${blog.id}`} onClick={handleProductClick}>
                <h3 className="text-xl font-bold font-montserrat mb-2 hover:underline">
                  {blog.title}
                </h3>
              </Link>

              <p className="text-sm text-gray-700">{blog.description.substring(0, 90)}...</p>

              <div className="mt-6">
                <Link to={`/blog/${blog.id}`} onClick={handleProductClick}>
                  <Button
                    label="Read More"
                    backgroundColor="bg-white"
                    textColor="text-gray-800"
                    fontFamily="font-cookie text-xl"
                    size="w-full sm:w-44 h-12"
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link to="/blog" onClick={handleProductClick}>
          <Button
            label="View More"
            backgroundColor="bg-white"
            textColor="text-gray-800"
            borderRadius="rounded-md border-2"
            size="px-8 py-3"
          />
        </Link>
      </div>
    </section>
  );
};

export default Blog;



// import { FaCalendar, FaUser } from "react-icons/fa"
// import { blogPosts } from "../constants"
// import { Button } from '../components'

// const Blog = () => {
//   return (
//     <section className="px-12 py-8">
//             <h2 className="text-center text-8xl font-bold font-montserrat">Latests Blogs</h2>
//             <p className="text-center text-2xl font-montserrat mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//             <div className="flex flex-col xl:flex-row justify-evenly items-center mt-8">
//                 {blogPosts.map((blog) => (
//                     <div key={blog.name} className="group w-[700px] h-[700px] shadow-lg flex justify-center items-center gap-12 p-12">
//                         <img
//                             src={blog.img}
//                             alt={blog.name}
//                             className="w-[200px] h-[200px] lg:max-w-lg object-contain group-hover:-rotate-12 transiton duration-500" />
//                        <div className="">
//                             <div className="flex gap-8">
//                                 <p className="text-md xl:text-xl flex gap-2"><FaCalendar /> {blog.date}</p>
//                                 <p className="text-md xl:text-xl flex gap-2"><FaUser /> {blog.name}</p>
//                             </div>
//                             <h2 className="text-2xl md:text-4xl font-bold font-montserrat mt-8">{blog.title}</h2>
//                             <p className="text-lg md:text-xl mt-8">{blog.description}</p>
//                             <div className="mt-8">
//                                 <Button
//                                     label='Read More'
//                                     backgroundColor='bg-white'
//                                     textColor='text-amber-800'
//                                     borderColor='border-amber-800'
//                                     fontFamily='font-cookie text-xl xl:text-3xl'
//                                     size='w-44 h-16' />
//                             </div>
//                        </div>

//                     </div>
//                 ))}
//             </div>
//             <div className="mt-12">
//                 <Button
//                     label='View More'
//                     backgroundColor='bg-white'
//                     textColor='text-amber-800 font-bold'
//                     borderColor='border-amber-800'
//                     borderRadius='rounded-none border-[3px]'
//                     size='px-14 py-6'
//                     center='mx-auto block' />
//             </div>
//         </section>
//   )
// }

// export default Blog