import { FaCalendar, FaUser } from "react-icons/fa6";
import { blogPosts, vr9 } from "../../constants";
import Button from "../../components/Button";
import TopBanner from "../../components/TopBanner";
import LeftBlog from "../../components/LeftBlog";
import Footer from "../../components/Footer";
import BottomNumbers from "../../components/BottomNumbers";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const handleProductClick = (e) => {
    e.stopPropagation();
    window.scrollTo(0, 0);
  };

  return (
    <section>
      <TopBanner title="Blog" img={vr9} />

      <div className="flex flex-col-reverse lg:flex-row mt-10 gap-10 px-4 xl:px-24">
        {/* Blog List */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {blogPosts.map((blog) => (
              <div
                key={blog.id}
                className="group w-full overflow-hidden hover:scale-95 border border-gray-300 rounded-lg transition-all"
              >
                <img
                  src={blog.img}
                  alt={blog.name}
                  className="w-full h-48 object-cover transition duration-500 cursor-pointer"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center text-sm gap-4 mb-3">
                    <p className="flex items-center gap-2">
                      <FaUser size={16} /> {blog.name}
                    </p>
                    <p className="flex items-center gap-2">
                      <FaCalendar size={16} /> {blog.date}
                    </p>
                  </div>
                  <Link
                    to={`/blog/${blog.id}`}
                    onClick={handleProductClick}
                    className="cursor-pointer"
                  >
                    <h2 className="text-xl font-bold font-montserrat mb-2">{blog.title}</h2>
                  </Link>
                  <p className="text-sm">{blog.description.substring(0, 150)}...</p>
                  <div className="mt-4">
                    <Link
                      to={`/blog/${blog.id}`}
                      onClick={handleProductClick}
                      className="cursor-pointer"
                    >
                      <Button
                        label="Read More"
                        backgroundColor="bg-white"
                        textColor="text-gray-800"
                        fontFamily="font-cookie text-lg"
                        size="w-36 h-12"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button + Pagination */}
          <div className="mt-16 text-center">
            <Link to="/blog">
              <Button
                label="View More"
                backgroundColor="bg-white"
                textColor="text-gray-800"
                borderRadius="rounded-md border-2"
                size="px-8 py-4"
              />
            </Link>
          </div>
          <BottomNumbers />
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-1/3">
          <LeftBlog />
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default BlogPage;
