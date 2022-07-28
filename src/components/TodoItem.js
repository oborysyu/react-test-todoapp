import { useContext, useState } from "react";
import Context from "./context";

const styles = {
  button: {
    marginLeft: "10px",
  },
  div: {
    marginTop: "5px",
    marginBottom: "5px",
  },
  input: {
    marginRight: "1rem",
  },
};

export function TodoItem({ todo, index }) {
  const { funcs } = useContext(Context);
  const [editMode, setEditMode] = useState(null);
  const [todoItem, setTodoItem] = useState(todo);

  function handleSubmit() {
    funcs.editTodo(todoItem);
    setEditMode(null);
  }

  function handleChange(key, value) {
    setTodoItem({
      ...todoItem,
      [key]: value,
    });
  }

  function editTodoItem(todo) {
    setEditMode(todo);
  }

  return (
    <div style={styles.div}>
      <strong>{index + 1}</strong>
      &nbsp;
      {todoItem.title}
      &nbsp;
      {todoItem.description}
      <button
        type="button"
        style={styles.button}
        onClick={() => {
          editTodoItem(todoItem);
        }}
        className="btn btn-outline-secondary"
        title="edit todo item"
      >
        Edit
      </button>
      <button
        type="button"
        style={styles.button}
        onClick={() => {
          funcs.removeTodo(todoItem.id);
        }}
        className="btn btn-outline-danger"
        title="remove todo item"
      >
        X
      </button>
      {editMode && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">
            <input
              value={todoItem.title}
              onChange={(e) => handleChange("title", e.target.value)}
            />
            <input
              value={todoItem.description}
              onChange={(e) => handleChange("description", e.target.value)}
            />
          </label>
          <button type="submit">Submit changes</button>
        </form>
      )}
    </div>
  );
}
