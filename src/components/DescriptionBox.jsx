import { useState } from "react";

const DescriptionBox = () => {
  const [activeTab, setActiveTab] = useState("description"); // State to track active tab

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      {/* Tab Navigation */}
      <div className="flex border-b border-gray-300">
        <button
          className={`px-6 py-3 text-xl font-medium focus:outline-none ${
            activeTab === "description" ? "border-b-2 border-amber-600 text-amber-700" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className={`px-6 py-3 text-xl font-medium focus:outline-none ${
            activeTab === "reviews" ? "border-b-2 border-amber-600 text-amber-700" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews (22)
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-6 text-gray-700 text-sm md:text-base leading-relaxed">
        {activeTab === "description" ? (
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates quo est sequi unde
              eligendi quia odio reiciendis voluptatum omnis, quibusdam magni ullam aliquam velit
              architecto praesentium!
            </p>
            <p className="mt-4">
              Dolorum numquam exercitationem qui voluptates voluptatem laudantium quae repellat nam
              maxime incidunt, veniam vitae magni.
            </p>
          </div>
        ) : (
          <div>
            <p className="font-semibold">John Doe</p>
            <p className="text-gray-600 italic">"Amazing product! Highly recommend."</p>
            <p className="mt-4 font-semibold">Jane Smith</p>
            <p className="text-gray-600 italic">"Great quality and fast shipping!"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DescriptionBox;
