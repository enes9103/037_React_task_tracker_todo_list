import Duty from "./Duty";

const Tasks = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Duty duty={task} />
      ))}
    </div>
  );
};

export default Tasks;
