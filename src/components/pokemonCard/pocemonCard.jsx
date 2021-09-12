import cardBack from '../../assets/card-back-side.jpg'
import './index.css';
import { useState } from 'react';

const PokemonCard = ({
  values: {
    top,
    right,
    bottom,
    left
  },
  img,
  name,
  id,
  type
}) => {
  const [isActive, setActive] = useState(false);
  const onClickHandler = () => {
    setActive(true);
  }
  let active = isActive ? 'active' : '';

  return (
    <div className="root" onClick={onClickHandler}>
      <div className={`pokemonCard ${active}`}>
        <div className="cardFront">
          <div className="wrap front">
            <div className={`pokemon ${type}`}>
              <div className="values">
                <div className="count top">{top}</div>
                <div className="count right">{right}</div>
                <div className="count bottom">{bottom}</div>
                <div className="count left">{left}</div>
              </div>
              <div className="imgContainer">
                <img src={img} alt={name} />
              </div>
              <div className="info">
                <span className="number">{id}</span>
                  <h3 className="name">{name}</h3>
                  <small className="type">Type: <span>{type}</span></small>
                  </div>
            </div>
          </div>
        </div>
        <div className="cardBack">
          <div className="wrap back">
            <img src={cardBack} alt="Сard Backed" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
