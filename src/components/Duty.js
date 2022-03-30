import { FaTimes } from "react-icons/fa";
const Duty = ({ duty, deleteTask }) => {
  return (
    <div className="task">
      <h3>
        {duty.text}{""}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => deleteTask(duty.id)}
        />
      </h3>
      <p>{duty.day}</p>
    </div>
  );
};

export default Duty;

