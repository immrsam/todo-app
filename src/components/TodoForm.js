import { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const focus = useRef(null);
  useEffect(() => {
    focus.current.focus();
  });
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    //
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };
  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a todo"
          value={input}
          name="text"
          className="todo-input"
          onChange={handleChange}
          ref={focus}
        />
        <button className="todo-button">Add ToDo</button>
      </form>
    </div>
  );
}

export default TodoForm;
