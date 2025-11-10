import { useState } from "react";
import { brands, colors, sizes, topCategories } from "../constants";

const LeftSidebar = ({ minPrice = 0, maxPrice = 1000, onPriceChange, isLeftBarActive }) => {
  const [price, setPrice] = useState(maxPrice / 2);

  const handlePriceChange = (event) => {
    const newPrice = event.target.value;
    setPrice(newPrice);
    // onPriceChange(newPrice); // Pass the selected price to parent component
  };

  

  return (
    <section className={`${isLeftBarActive ? 'block' : 'hidden'} w-full xl:w-1/4 h-fit flex-shrink-0 shadow-lg border-2 border-stone-400 p-4 xl:p-8 rounded-lg`}>
      <h2 className="text-xl xl:text-2xl font-bold font-montserrat">Top Categories</h2>
      <hr className="border-2 border-stone-400 my-4 xl:my-6 w-2/3" />
      <ul>
        {topCategories.map((category) => (
          <li
            key={category.category}
            className="mt-4 text-md xl:text-xl font-montserrat hover:font-medium cursor-pointer"
          >
            {category.category} ({category.number})
          </li>
        ))}
      </ul>

      <h2 className="text-xl xl:text-2xl font-bold mt-6 mb-4">Price Filter</h2>
      <hr className="border-2 border-stone-400 my-4 xl:my-6 w-2/3" />
      <span className="text-md xl:text-xl">${minPrice} - ${price}</span>

      {/* Price Slider */}
      <input
        type="range"
        min={minPrice}
        max={maxPrice}
        value={price}
        onChange={handlePriceChange}
        className="w-full cursor-pointer mt-4"
      />

      <h2 className="text-xl xl:text-2xl font-bold mt-6 mb-4">Color</h2>
      <hr className="border-2 border-stone-400 my-4 xl:my-6 w-2/3" />
      <ul className="flex flex-wrap gap-4">
        {colors.map((color) => (
          <li
            key={color}
            className={`${color} w-[20px] h-[20px] rounded-full`}
          ></li>
        ))}
      </ul>

      <h2 className="text-xl xl:text-2xl font-bold mt-6 mb-4">Size</h2>
      <hr className="border-2 border-stone-400 my-4 xl:my-6 w-2/3" />
      <ul>
        {sizes.map((size) => (
          <li
            key={size.size}
            className="mt-4 text-md xl:text-xl font-montserrat hover:font-medium cursor-pointer"
          >
            {size.size} ({size.number})
          </li>
        ))}
      </ul>

      <h2 className="text-xl xl:text-2xl font-bold mt-6 mb-4">Brands</h2>
      <hr className="border-2 border-stone-400 my-4 xl:my-6 w-2/3" />
      <ul>
        {brands.map((brand) => (
          <li
            key={brand.name}
            className="mt-4 text-md xl:text-xl font-montserrat hover:font-medium cursor-pointer"
          >
            {brand.name} ({brand.number})
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LeftSidebar;
