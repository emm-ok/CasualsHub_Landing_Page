import { airpods3, banner3, laptop } from "../constants";
import { Blog, Button, Footer, FreeShipping, Review, TeamMembers, TopBanner, VideoPlayer } from '../components'

const AboutPage = () => {
  return (
    <section className="font-montserrat">
      {/* Top Banner */}
      <TopBanner title="About Us" img={airpods3} />

      {/* History Section */}
      <div className="my-20 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-32 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Text */}
        <div className="w-full lg:w-2/3">
          <h2 className="mb-5 text-4xl xl:text-7xl font-bold font-cookie">Our History</h2>
          <p className="text-lg xl:text-2xl text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius a ratione sint optio vitae veniam quas nesciunt deleniti. Exercitationem recusandae quo at velit ab aliquam, odit omnis? Corrupti quis dolor a laudantium tenetur expedita ex, aspernatur, omnis eaque, qui ut voluptate officia impedit vitae! Libero sint sit fugit saepe nobis!
          </p>
          <div className="mt-10">
            <Button
              label="Start now"
              backgroundColor="bg-white"
              borderRadius="rounded-none border-2 border-amber-800"
              textColor="font-bold text-xl xl:text-2xl"
              size="w-40 xl:w-48 h-14 xl:h-16"
            />
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-3/4">
          <img src={banner3} alt="About Banner" className="w-full object-cover rounded-xl" />
        </div>
      </div>

      {/* Video Section */}
      <VideoPlayer youtubeUrl="https://www.youtube.com/watch?v=X8ipUgXH6jw" thumbnail={laptop} />

      {/* Other Sections */}
      <FreeShipping />
      <TeamMembers />
      <Review />
      <Blog />
      
    </section>
  );
};

export default AboutPage;
