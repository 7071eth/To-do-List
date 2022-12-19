import React from "react";
import "./Assets/stylesheets/app.css";
import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState([]);
  const [toDos, setToDos] = useState("");
  const [empty,setEmpty] = useState(false);
  return (
    <div className="app">
      <div className="addTask">
        <h1>TODO APP</h1>

        <div className="subHeading">
          <br />
          <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
        </div>
        <div className="input ">
          <input
            value={toDos}
            onChange={(e) => {
              setToDos(e.target.value);
              setEmpty(false)
            }}
            type="text"
            placeholder="🖊️ Add item..."
          />
          <i
            onClick={() => {
              if (toDos) {
                setToDo([
                  ...toDo,
                  { id: Date.now(), text: toDos, status: false },
                ]);
                setToDos("");
              } else {
                setEmpty(true)
              }
            }}
            className="fas fa-plus"
          ></i>
          
        </div>
        {empty && <span>Enter something !</span> }
        
      </div>

      <div className="container">
        <div className="row tasks">
          <div className="task1">
            <div className="header1">
              <h1>TODAYS TASKS</h1>
            </div>
            <div className="contentList">
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
                    </div>
                    <p>{obj.text}</p>
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
            </div>
          </div>
          <div className="task1">
            <div className="header1">
              <h1>PENDING TASKS</h1>
            </div>
            <div className="contentList">
              {toDo.map((obj) => {
                if (!obj.status) {
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
          <div className="task1">
            <div className="header1">
              <h1>COMPLETED TASKS</h1>
            </div>
            <div className="contentList">
              {toDo.map((obj) => {
                if (obj.status) {
                  return (
                    <div className="todo completed">
                      <p>{obj.text}</p>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
