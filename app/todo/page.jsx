"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodo, deleteTodo, fatchAllTodos } from "./todoAPI";
import { selectTodo } from "./todoSlice";

const TodoPage = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector(selectTodo);

  // use state
  const [input, setInput] = useState({
    name: "",
    priority: "",
  });

  const handelInput = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(createTodo(input));
  };

  const handleDeleteItem = (id) => {
    dispatch(deleteTodo(id))
  }

  useEffect(() => {
    dispatch(fatchAllTodos());
  }, [dispatch]);

  return (
    <>
      <div className="container mt-5">
        <div class="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h3>Create Todo</h3>
                <hr />
                <form onSubmit={handleFormSubmit}>
                  <div className="my-3">
                    <label htmlFor="">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={input.name}
                      onChange={handelInput}
                      className="form-control"
                    />
                  </div>
                  <div className="my-3">
                    <label htmlFor="">Priority</label>
                    <input
                      type="text"
                      name="priority"
                      value={input.priority}
                      onChange={handelInput}
                      className="form-control"
                    />
                  </div>
                  <div className="my-3">
                    <input
                      type="submit"
                      value={"Submit"}
                      className="form-control"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <h3 className="mt-3">Lists</h3>
          <ul>
            {todos.map((item, index) => {
              return (
                <li key={index} className="mt-2">
                  {item.name} &nbsp;{" "}
                  <button onClick={() => handleDeleteItem(item._id)}>
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TodoPage;
