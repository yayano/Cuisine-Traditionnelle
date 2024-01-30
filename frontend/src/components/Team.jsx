import { data } from "../restApi.json";
const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">NOTRE ÉQUIPE</h1>
          <p>
            Notre équipe dévouée est le cœur battant de CUISINE TRADITIONNELLE.
            Un groupe passionné de chefs talentueux, d&apos;experts en cuisine
            et de professionnels déterminés à vous offrir une expérience
            gastronomique exceptionnelle.
          </p>
        </div>
        <div className="team_container">
          {data[0].team.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <h3>{element.name}</h3>
                <p>{element.designation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
