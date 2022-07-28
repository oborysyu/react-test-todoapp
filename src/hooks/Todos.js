import {
  API_DOMAIN_DELETE_TASK_BY_ID,
  API_DOMAIN_GET_TASKS,
  API_DOMAIN_CREATE_TASK,
  API_DOMAIN_UPDATE_TASK,
} from "../config/api";
import axios from "axios";
import { useEffect, useState } from "react";

export function useTodos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newTodo, setNewTodo] = useState({ title: "", description: "" });

  useEffect(() => {
    axios
      .get(API_DOMAIN_GET_TASKS)
      .then((res) => {
        setTodos(res.data.tasks);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const funcs = {
    removeTodo: function (id) {
      axios
        .delete(API_DOMAIN_DELETE_TASK_BY_ID + id)
        .then((res) => {
          setTodos(todos.filter((todo) => todo.id !== id));
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    editTodo: function (todo) {
      axios
        .post(API_DOMAIN_UPDATE_TASK, {
          id: todo.id,
          title: todo.title,
          description: todo.description,
        })
        .then((res) => {
          const newState = todos.map((obj) => {
            if (obj.id === todo.id) {
              return todo;
            }
            return obj;
          });
          setTodos(newState);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(API_DOMAIN_CREATE_TASK, {
        title: newTodo.title,
        description: newTodo.description,
      })
      .then((res) => {
        setNewTodo({ title: "", description: "" });
        setTodos(todos.concat([res.data.task]));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setNewTodo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return { todos, loading, handleOnChange, handleSubmit, funcs, newTodo };
}
