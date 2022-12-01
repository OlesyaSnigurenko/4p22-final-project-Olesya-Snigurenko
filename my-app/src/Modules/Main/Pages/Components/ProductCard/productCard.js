import "./productCard.css";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const { id, image, title, price } = props;
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/catalog/${id}`)}>
      <img className="card__image" src={image} />
      <div className="card__title">{title}</div>
      <div className="card__price">{price} ₽</div>
    </div>
  );
};

export default Card;
