const Button = ({ color, text, toggleShow }) => {
  // const handleClick = () => {
  //   console.log("Click with handle");
  // };
  return (
    <div>
      <button
        className="btn"
        style={{ backgroundColor: color }}
        onClick={toggleShow}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
