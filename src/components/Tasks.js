import Duty from "./Duty";

const Tasks = ({ tasks, deleteTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Duty duty={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
};

export default Tasks;
