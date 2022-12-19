import React from "react";
import "./Assets/stylesheets/app.css";
import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState([]);
  const [toDos, setToDos] = useState("");
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>

      <div className="input">
        <input
          value={toDos}
          onChange={(e) => {
            setToDos(e.target.value);
          }}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() =>
            setToDo([...toDo, { id: Date.now(), text: toDos, status: false }])
          }
          className="fas fa-plus"
        ></i>
      </div>
      <div className="completed">
        <h1>Todays Tasks</h1>
      </div>
      <div className="todos">
        {toDo.map((obj) => (
          <div className="todo">
            {console.log(obj)}
            <div className="left">
              <input
                onChange={(e) => {
                  console.log(e.target.value);
                  setToDo(
                    toDo.filter((obj2) => {
                      if (obj2.id === obj.id) {
                        obj2.status = e.target.checked;
                      }
                      return obj2;
                    })
                  );
                }}
                type="checkbox"
                name=""
                id=""
              />
              <p>{obj.text}</p>
            </div>
            <div className="right">
              <i
                onClick={() => {
                  setToDo(toDo.filter((obj3) => obj3.id !== obj.id));
                }}
                className="fas fa-times"
              ></i>
            </div>
          </div>
        ))}
      </div>

      <div>
        <div className="completed">
          <h1>COMPLETED TASKS</h1>
        </div>
        {toDo.map((obj) => {
          if (obj.status) {
            return (
              <div className="todo">
                <p>{obj.text}</p>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default App;
