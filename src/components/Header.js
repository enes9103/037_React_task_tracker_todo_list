// import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const handleClick = () => {
    console.log("Click with handle from HEader");
  };
  return (
    <div className="header">
      <h1>{title}</h1>
      <Button
        color="purple"
        text="Show Add Task Bar"
        handleClick={handleClick}
      />
    </div>
  );
};

// Header.propTypes = {
//   title: PropTypes.string.isRequired,
// };

// Header.defaultProps = {
//   title: "Task Tracker",
// };

// title = "Task Default"  in props area
export default Header;
