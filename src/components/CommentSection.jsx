import { comments } from "../constants";

const CommentSection = () => {
  return (
    <section className="mt-8 sm:mt-10">
      <h2 className="text-xl sm:text-2xl font-bold">Comment: <span className="text-gray-400 ml-2">2</span></h2>
      {comments.map((comment) => (
        <div key={comment.name} className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8 mx-4 sm:mx-8">
          <img 
            src={comment.img} 
            alt="" 
            className="w-[50px] h-[50px] object-contain p-1 border-2 border-gray-300 rounded-full" 
          />
          <div>
            <div className="flex items-center gap-4">
              <h2 className="font-bold">{comment.name}</h2>
              <p className="text-xs italic">{comment.date}</p>
            </div>
            <p className="mt-2 sm:mt-4">{comment.comment}</p>
            <div className="flex items-center gap-4 mt-4">
              <button className="font-medium text-sm sm:text-base">Reply</button>
              <button className="font-medium text-sm sm:text-base">Like</button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CommentSection;
