import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

const ProductCard = (props) => {
  const { id, image, title, price } = props;
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/catalog/${id}`)}>
      <img className="card__image" src={image} />
      <div className="card__title">{title}</div>
      <div className="card__price">{price} ₽</div>
      <button className="card__batton">В корзину</button>
    </div>
  );
};

export default ProductCard;
