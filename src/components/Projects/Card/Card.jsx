import "./Card.scss";

const Card = ({ data, handleClick, index }) => {
  const { title, shortDesc, skills } = data;

  return (
    <div className="card" onClick={() => handleClick(index)}>
      <p className="card__title">{title}</p>
      <p className="card__brief">{shortDesc}</p>
      <div className="card__line"></div>
      <div className="card__skills">
        <div className="card__skills-left">
          <p className="skill skill1">{skills[0]}</p>
          <p className="skill skill2">{skills[1]}</p>
        </div>
        <div className="card__skills-right">
          <p className="skill skill3">{skills[2]}</p>
          <p className="skill skill4">{skills[3]}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
