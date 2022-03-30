import { FaTimes } from "react-icons/fa";
const Duty = ({ duty }) => {
  return (
    <div>
      <h3>
        {duty.text} <FaTimes style={{ color: "red", cursor: "pointer" }} />
      </h3>
      <p>{duty.day}</p>
    </div>
  );
};

export default Duty;
