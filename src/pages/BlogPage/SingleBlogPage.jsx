import { useContext } from "react";
import TopBanner from "../../components/TopBanner";
import { ShopContext } from "../../context/ShopContext";
import { useParams } from "react-router-dom";
import { headphone2, socialMedia } from "../../constants";
import { CommentSection, CommentInput, Button, Footer, LeftBlog} from '../../components'

const SingleBlogPage = () => {
  const { blogId } = useParams(); // Get post ID from URL
  const { blogPosts } = useContext(ShopContext);
  const blogPost = blogPosts.find((p) => p.id === blogId);

  return (
    <section>
      <TopBanner title='Blog Details' img={headphone2} />
      <div className="flex flex-col lg:flex-row justify-center gap-6 lg:gap-12 px-4 lg:px-16 mt-12">
        {/* Blog Post Section */}
        <div className="flex flex-col items-center lg:items-start gap-6 bg-white p-6 rounded-xl border-2 border-gray-300 w-full lg:w-2/3">
          <img 
            src={blogPost.img} 
            alt={blogPost.title} 
            className="w-full h-auto object-cover rounded-xl" 
          />
          <div className="w-full">
            <div className="flex items-center gap-4 mt-8">
              <div className="flex items-center gap-2">
                <img 
                  src={blogPost.img} 
                  alt={blogPost.name} 
                  className="w-[50px] h-[50px] object-contain p-1 border-2 border-gray-300 rounded-full" 
                />
                <h2 className="font-semibold">{blogPost.name}</h2>
              </div>
              <p className="text-sm text-gray-600"><span className="font-bold">Date:</span> {blogPost.date}</p>
            </div>

            <h2 className="text-xl font-semibold mt-8">Share:</h2>
            <div className="flex gap-4 mt-4">
              {socialMedia.map((icon) => (
                <div key={icon.alt} className="flex justify-center items-center w-8 h-8 bg-gray-300 rounded-full">
                  <img src={icon.src} alt={icon.alt} width={20} height={20} />
                </div>
              ))}
            </div>

            <h2 className="font-bold text-2xl mt-8">{blogPost.title}</h2>
            <p className="mt-4 text-sm sm:text-base">{blogPost.description}</p>

            <h2 className="text-xl font-bold mt-8">Features</h2>
            <ul className="list-disc pl-6 mt-4 text-sm sm:text-base">
              {['5.5 “ Screen, 1080 x 1920 screen size', '10 cm height', '7 hours calling time', '20 MP Camera', '12 MP Selfie Camera'].map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <div className="flex items-center mt-8 gap-4">
              <h2 className="text-xl font-bold">Tag:</h2>
              <ul className="flex gap-2 flex-wrap">
                {['Smartphones'].map((tag) => (
                  <li key={tag} className="bg-gray-200 px-2 py-1 rounded">{tag}</li>
                ))}
              </ul>
            </div>

            <CommentSection />
            <CommentInput />

            <div className="mt-6">
              <Button
                label="Post Comment"
                borderRadius="rounded-full"
                size="px-8 py-4"
              />
            </div>
          </div>
        </div>

        {/* Left Blog Section */}
        <div className="w-full lg:w-1/3">
          <LeftBlog />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default SingleBlogPage;
