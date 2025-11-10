import Button from "./Button";

const ContactInput = () => {
  return (
    <section className="mb-24 p-6 bg-gray-200">
      <h2 className="font-bold text-4xl sm:text-5xl lg:text-[70px] font-cookie text-center mb-4">
        Get in Touch With Us
      </h2>
      <p className="text-xl text-center mb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eligendi
        accusantium veniam iure voluptatem porro nobis cumque nesciunt mollitia dolore!
      </p>

      {/* Form Section */}
      <form className="mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 sm:px-16 lg:px-32">
        <input
          type="text"
          placeholder="Name"
          className="md:col-span-1 col-span-2 px-6 py-4 border-none outline-none text-lg shadow-md rounded-full bg-white focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        />
        <input
          type="email"
          placeholder="Email"
          className="md:col-span-1 col-span-2 px-6 py-4 border-none outline-none text-lg shadow-md rounded-full bg-white focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        />
        <input
          type="text"
          placeholder="Subject"
          className="col-span-2 px-6 py-4 border-none outline-none text-lg shadow-md rounded-full bg-white focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        />
        <textarea
          placeholder="Your message"
          className="col-span-2 h-[200px] px-6 py-4 border-none outline-none text-lg shadow-md rounded-2xl bg-white focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        ></textarea>
      </form>

      {/* Submit Button */}
      <div className="flex justify-center mt-6">
        <Button
          label="Submit"
          size="w-56 h-16"
          borderRadius="rounded-full hover:bg-gray-700"
        />
      </div>
    </section>
  );
};

export default ContactInput;
