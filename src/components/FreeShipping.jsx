import { FaHeadset, FaShippingFast, FaUndo } from "react-icons/fa";

const features = [
  {
    icon: <FaShippingFast size={50} />,
    title: "100% Free Shipping",
    description: "We ship all our products for free as long as you’re buying within the USA.",
  },
  {
    icon: <FaHeadset size={50} />,
    title: "24/7 Support",
    description: "Our support team is extremely active. You’ll get a response within 2 minutes.",
  },
  {
    icon: <FaUndo size={50} />,
    title: "30 Day Return",
    description: "Our 30-day return program is open to customers. Just fill up a simple form.",
  },
];

const FreeShipping = () => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto px-4">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-5 p-6 shadow-md bg-white rounded-lg flex-1"
          >
            <div className="text-gray-600">{item.icon}</div>
            <div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FreeShipping;
