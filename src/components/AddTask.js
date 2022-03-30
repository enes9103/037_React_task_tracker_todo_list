import { useState } from "react";

const AddTask = ({ addTask }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addTask({ text, day, isDone: false });
    setText("");
    setDay("");

    // console.log(text);
    // console.log(day);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="task">Task</label>
        <input
          id="task"
          name="text"
          type="text"
          placeholder="AddTask"
          required
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </div>
      <div className="form-control">
        <label htmlFor="day">Day & Time</label>
        <input
          id="day"
          name="day"
          type="text"
          placeholder="Add Day & Time"
          required
          onChange={(e) => setDay(e.target.value)}
          value={day}
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
