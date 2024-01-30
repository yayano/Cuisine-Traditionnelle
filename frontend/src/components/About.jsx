import { Link } from "react-scroll";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">À PROPOS</h1>
            <p>
              Chaque recette raconte une histoire, et chaque plat est une
              invitation à un voyage culinaire.
            </p>
          </div>
          <p className="mid">
            Bienvenue sur CUISINE TRADITIONNELLE, l&apos;endroit où la passion
            pour la cuisine prend vie. Notre histoire commence avec un amour
            partagé pour les saveurs authentiques, les recettes traditionnelles
            et la créativité culinaire. Chez CUISINE TRADITIONNELLE, nous
            croyons que la cuisine va au-delà de la simple préparation des repas
            ; c&apos;est une expérience qui éveille les sens et crée des
            souvenirs durables.
          </p>
          <Link to={"menu"} spy={true} smooth={true} duration={500}>
            Explorez Notre Menu{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
          <img src="/images/rchta.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
