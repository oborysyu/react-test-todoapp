import { useState } from "react";

export function AddTodo(props) {
  const [isOpen, setIsOpen] = useState(false);

  function togglePanel() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <div className="row">
        <div className="col text-center">
          <button onClick={togglePanel} className="btn btn-secondary">
            {isOpen ? "Close form" : "Add"}
          </button>
        </div>
      </div>
      {isOpen ? (
        <div>
          <form onSubmit={(event) => props.handleSubmit(event)}>
            <div className="form-group">
              <input
                type="text"
                name="title"
                className="form-control"
                placeholder="Enter todo title"
                value={props.newTodo.title}
                onChange={(event) => props.handleOnChange(event)}
              />
              <input
                type="text"
                name="description"
                className="form-control"
                placeholder="Enter todo description"
                value={props.newTodo.description}
                onChange={(event) => props.handleOnChange(event)}
              />
            </div>
            <button className="btn btn-secondary" type="submit">
              Add
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
}
