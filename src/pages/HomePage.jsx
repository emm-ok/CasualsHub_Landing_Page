import { Hero, SpecialOffer, Popular, Banner, Featured, Review, Blog, Newsletter, Footer } from '../components';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <SpecialOffer />
      <Popular />
      <Banner />
      <Featured />
      <Review />
      <Blog />
      <Newsletter />
    </main>
  );
};

export default HomePage;