import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">Délicieuse </h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img src="/images/food1.png" alt="hero1" />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className="title">cuisine</h1>
                <h1 className="title dishes_title">& Plats</h1>
                <img src="/threelines.svg" alt="three" />
              </div>
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">
            <img src="/images/Couscous1.png" alt="hero2" />
          </div>
          <h1 className="title dishes_title">& Plats</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
