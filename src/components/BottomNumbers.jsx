import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const BottomNumbers = () => {
  return (
    <div className="mt-16 mb-16 flex justify-center gap-1 md:gap-4">
      {/* Previous Page Button */}
      <span className="px-4 py-2 border-2 border-gray-300 text-md md:text-2xl flex items-center justify-center cursor-pointer hover:border-gray-800 rounded-lg transition duration-300">
        <FaChevronLeft />
      </span>

      {/* Page Numbers */}
      {['1', '2', '3'].map((page, index) => (
        <span
          key={index}
          className={`px-4 py-2 border-2 text-md md:text-2xl font-bold cursor-pointer rounded-lg transition duration-300 ${index === 1 ? 'border-gray-800' : 'border-gray-300'} hover:border-gray-800`}
        >
          {page}
        </span>
      ))}

      {/* Next Page Button */}
      <span className="px-4 py-2 border-2 border-gray-300 text-md md:text-2xl flex items-center justify-center cursor-pointer hover:border-gray-800 rounded-lg transition duration-300">
        <FaChevronRight />
      </span>
    </div>
  );
};

export default BottomNumbers;
