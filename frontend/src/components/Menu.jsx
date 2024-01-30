import { data } from "../restApi.json";
const Menu = () => {
  return (
    <section className="menu" id="menu">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">PLATS POPULAIRES</h1>
          <p>
            Explorez notre sélection incontournable de plats populaires, chaque
            bouchée est une expérience culinaire exceptionnelle qui révèle
            pourquoi ces mets sont les favoris de nos clients.
          </p>
        </div>
        <div className="dishes_container">
          {data[0].dishes.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <h3>{element.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Menu;
