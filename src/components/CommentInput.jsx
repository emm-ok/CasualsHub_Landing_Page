const CommentInput = () => {
  return (
    <section className="md:w-1/2 w-full bg-gray-200 p-6 sm:p-8 rounded-xl mt-[5rem]">
      <h2 className="uppercase font-medium">Leave a comment</h2>
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <input
          type="text"
          placeholder="Name"
          className="col-span-2 md:col-span-1 px-6 py-4 rounded-full outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="col-span-2 md:col-span-1 px-6 py-4 rounded-full outline-none"
        />
        <input
          type="text"
          placeholder="Your message"
          className="px-6 py-4 rounded-full col-span-2 outline-none"
        />
      </form>
    </section>
  );
};

export default CommentInput;
