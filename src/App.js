import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { Loading } from "./components/Loading";
import Context from "./components/context";
import { useTodos } from "./hooks/Todos";

function App() {
  const { todos, loading, handleOnChange, handleSubmit, funcs, newTodo } = useTodos();

  return (
    <Context.Provider value={{ funcs }}>
      <div className="App">
        {loading ? (
          <Loading />
        ) : (
          <>
            <AddTodo
              handleSubmit={handleSubmit}
              handleOnChange={handleOnChange}
              newTodo={newTodo}
            />
            {todos.length ? (
              <TodoList todos={todos} />
            ) : loading ? null : (
              <p>No todos!</p>
            )}
          </>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;