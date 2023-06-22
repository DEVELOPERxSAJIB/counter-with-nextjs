"use client";

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "./userApi";

const UserPage = async () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  });

  const [input, setInput] = useState({
    name: "",
    age: "",
    email: "",
    cell: "",
  });

  const handelInput = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card">
              <div className="card-body">
                <form action="">
                  <h3>Create student</h3>
                  <hr />
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
                    <label htmlFor="">Age</label>
                    <input
                      type="text"
                      name="age"
                      value={input.age}
                      onChange={handelInput}
                      className="form-control"
                    />
                  </div>
                  <div className="my-3">
                    <label htmlFor="">Email</label>
                    <input
                      type="text"
                      name="email"
                      value={input.email}
                      onChange={handelInput}
                      className="form-control"
                    />
                  </div>
                  <div className="my-3">
                    <label htmlFor="">Cell</label>
                    <input
                      type="text"
                      name="cell"
                      value={input.cell}
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
        </div>
      </div>
      <ul>
        <li></li>
      </ul>
    </>
  );
};

export default UserPage;
