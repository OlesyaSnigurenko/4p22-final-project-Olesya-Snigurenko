import "./Button.css";

const Button = (props) => {
  const { text } = props;

  return <button className="batton-item">{text}</button>;
};

export default Button;
