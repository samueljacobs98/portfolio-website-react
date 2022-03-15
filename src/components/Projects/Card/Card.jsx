import "./Card.scss";

const Card = () => {
  return (
    <div className="card">
      <p className="card__title">2048 Game</p>
      <p className="card__brief">In leo morbi et at ut enim a tortor quam.</p>
      <div className="card__line"></div>
      <div className="card__skills">
        <div className="card__skills-left">
          <p className="skill skill1">HTML</p>
          <p className="skill skill2">CSS</p>
        </div>
        <div className="card__skills-right">
          <p className="skill skill3">JavaScript</p>
          <p className="skill skill4">Figma</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
