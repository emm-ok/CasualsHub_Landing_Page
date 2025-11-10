import { reviews } from "../constants";

const Review = () => {
  return (
    <section className="px-4 py-16 bg-gray-200">
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-montserrat">
          Client Feedbacks
        </h2>
        <p className="text-base sm:text-lg md:text-xl font-montserrat mt-2">
          What our clients say about us.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="w-full sm:w-[90%] md:w-[45%] lg:w-[30%] bg-white p-6 shadow-md rounded-lg flex flex-col gap-4"
          >
            <p className="text-base md:text-lg font-montserrat text-center">
              {review.description}
            </p>
            <div className="flex items-center gap-4 mt-4">
              <img
                src={review.img}
                alt={review.name}
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-bold font-montserrat">{review.name}</h3>
                <p className="text-sm md:text-base font-montserrat text-gray-600">{review.profession}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;

