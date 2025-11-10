import { Link } from "react-router-dom";
import { blogPosts } from "../constants";
import { FaSearch } from "react-icons/fa";

const LeftBlog = () => {
  const handleProductClick = (e) => {
    e.stopPropagation();
    window.scrollTo(0, 0);
  };

  return (
    <aside className="sticky top-48 w-full lg:max-w-xs border-2 border-gray-200 rounded-xl p-6 bg-white">
      {/* Search */}
      <div className="mb-6">
        <h2 className="text-xl font-bold font-montserrat mb-2">Search</h2>
        <div className="flex items-center gap-2 border-2 border-gray-200 rounded-xl px-4 py-2">
          <input
            type="text"
            placeholder="Search anything"
            className="flex-1 outline-none bg-transparent"
          />
          <FaSearch size={18} className="text-gray-600" />
        </div>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h2 className="text-xl font-bold font-montserrat mb-2">Categories</h2>
        <ul className="space-y-2 text-gray-700">
          {["Smartphones", "Laptops", "Tablets", "Accessories"].map((category) => (
            <li key={category} className="cursor-pointer hover:text-black transition">
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts */}
      <div className="mb-6">
        <h2 className="text-xl font-bold font-montserrat mb-4">Recent Posts</h2>
        <div className="space-y-4">
          {blogPosts.slice(0, 3).map((blog) => (
            <Link
              key={blog.id}
              to={`/blog/${blog.id}`}
              onClick={handleProductClick}
              className="flex items-center gap-4 p-3 border rounded-lg hover:shadow-md hover:scale-[0.98] transition"
            >
              <img
                src={blog.img}
                alt={blog.title}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex flex-col">
                <h3 className="font-semibold text-sm line-clamp-2">{blog.title}</h3>
                <p className="text-xs text-gray-500">{blog.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div>
        <h2 className="text-xl font-bold font-montserrat mb-3">Tags</h2>
        <ul className="flex flex-wrap gap-2">
          {["Smartphones", "Laptops", "Tablets", "Accessories"].map((tag) => (
            <li
              key={tag}
              className="bg-gray-200 text-sm px-3 py-1 rounded hover:bg-gray-300 transition"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default LeftBlog;
