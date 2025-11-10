import { laptop, socialMedia, vr5 } from "../constants";
import ContactInput from "../components/ContactInput";
import Footer from "../components/Footer";
import MapEmbed from "../components/MapEmbed";
import TopBanner from "../components/TopBanner";

const ContactPage = () => {
  return (
    <section>
      <TopBanner title="Contact" img={vr5} />

      {/* Store Information Section */}
      <div className="my-16 px-4 lg:px-16 flex flex-col lg:flex-row items-center justify-center gap-8">
        <div className="w-full lg:w-2/3">
          <h2 className="mb-8 text-3xl lg:text-5xl font-bold">Our Store</h2>
          
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-xl lg:text-2xl">Address:</h3>
              <p className="text-lg lg:text-xl">342 East Nigerian Street, Abuja, Nigeria - 1212</p>
            </div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-xl lg:text-2xl">Phone:</h3>
              <p className="text-lg lg:text-xl">+234 805-858-4698</p>
            </div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-xl lg:text-2xl">Email:</h3>
              <p className="text-lg lg:text-xl">okoosiemmanuel@gmail.com</p>
            </div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-xl lg:text-2xl">Social:</h3>
              <div className="flex gap-4">
                {socialMedia.map((icon) => (
                  <div
                    key={icon.alt}
                    className="flex justify-center items-center w-10 h-10 bg-gray-300 cursor-pointer rounded-full"
                  >
                    <img src={icon.src} alt={icon.alt} width={24} height={24} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3">
          <img
            src={laptop}
            alt="Laptop"
            className="w-full h-auto object-contain rounded-lg"
          />
        </div>
      </div>

      {/* Find Us Section */}
      <h2 className="font-cookie font-bold text-4xl lg:text-[70px] text-center my-12">Find Us Here</h2>

      <MapEmbed />

      <ContactInput />
    </section>
  );
};

export default ContactPage;
