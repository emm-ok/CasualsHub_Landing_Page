import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products, speaker1 } from "../../constants";
import { Footer, LeftSidebar, ProductCard, TopBanner, BottomNumbers } from "../../components";
import { FaBars, FaList, FaTh } from "react-icons/fa";

const Products = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Default");
  const [view, setView] = useState("grid");
  const [isLeftBarActive, setIsLeftBarActive] = useState(false);

  const handleleftBarClick = () => {
    setIsLeftBarActive(!isLeftBarActive)
  }
  // Sorting logic
  const sortedItems = [...products].sort((a, b) => {
    if (selected === "Default") return a.name - b.name;
    if (selected === "Name") return a.name.localeCompare(b.name);
    if (selected === "Price") return a.price - b.price;
    if (selected === "Category") return a.category.localeCompare(b.category);
    return 0;
  });

  const options = ["Default", "Name", "Price", "Category"];

  return (
    <section className="w-full">
      <TopBanner title="Products" img={speaker1} />
        <div 
          onClick={handleleftBarClick}
          className="sticky top-[5.5rem] md:top-[8rem] z-20 bg-gray-800 p-4 flex items-center gap-2 font-montserrat">
          <FaBars size={30} color="white" /> <span className="text-lg font-medium text-white">Filter</span>
        </div>
      <div className="flex flex-col xl:flex-row gap-12 mt-4 px-8 xl:px-16">
        <LeftSidebar isLeftBarActive={isLeftBarActive} />

        <div className="w-full">
          {/* Header Section */}
          <div className="flex flex-wrap justify-between items-center py-6 gap-6">
            <h3 className="text-xl font-medium font-montserrat border border-stone-400 px-6 py-4 rounded-lg">
              12 products found out of 30
            </h3>

            {/* View Toggle Icons */}
            <div className="flex gap-4">
              {["grid", "list"].map((type) => (
                <button
                  key={type}
                  onClick={() => setView(type)}
                  className={`p-4 border-2 rounded transition-all duration-300 ${view === type
                      ? "border-gray-800 text-gray-800"
                      : "border-gray-300 text-gray-500"
                    }`}
                >
                  {type === "grid" ? <FaTh size={30} /> : <FaList size={30} />}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="relative w-56">
              <button
                className="w-full p-4 border-2 border-stone-400 text-stone-600 text-lg font-medium rounded flex justify-between items-center"
                onClick={() => setIsOpen(!isOpen)}
              >
                Sort by : {selected}
                <span>{isOpen ? "▲" : "▼"}</span>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute w-full bg-white shadow-md rounded mt-2 overflow-hidden z-10"
                  >
                    {options.map((option) => (
                      <li
                        key={option}
                        className="px-8 py-4 hover:translate-x-3 transition duration-300 text-lg border-b cursor-pointer"
                        onClick={() => {
                          setSelected(option);
                          setIsOpen(false);
                        }}
                      >
                        {option}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Product Grid/List */}
          <div
            className={`mt-6 ${view === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                : "space-y-4"
              }`}
          >
            <AnimatePresence>
              {sortedItems.map((product) => (
                <motion.div
                  key={product.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductCard {...product} view={view} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <BottomNumbers />
      
    </section>
  );
};

export default Products;
