import { Breadcrumb } from '../components';

const TopBanner = ({ title, img }) => {
  return (
    <section className="flex justify-between items-center px-4 sm:px-6 xl:px-32 py-2 md:py-6 bg-gray-300 gap-6 md:gap-0">
      <div>
        <h2 className="text-3xl sm:text-4xl xl:text-5xl mb-4 font-montserrat font-bold">{title}</h2>
        <Breadcrumb page={title} />
      </div>

      <img
        src={img}
        alt={`${title} banner`}
        className="w-16 h-36 sm:w-28 md:w-40 md:h-40 object-contain"
      />
    </section>
  );
};

export default TopBanner;
