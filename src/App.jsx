import { useState } from "react";
import "./App.css";

function App() {

  const [inputVal, setInputVal] = useState("");

  const [todos, setTodos] = useState([]);

  return (

    <div className="App">

      <form

        onSubmit={(e) => {

          e.preventDefault();

          let obj = {
            id: Date.now(),
            todo: inputVal,
          };

          let copyTodos = [...todos];

          copyTodos.push(obj);

          setTodos(copyTodos);

          setInputVal("");

        }}

      >

        <input

          type="text"

          value={inputVal}

          onChange={(event) => {

            setInputVal(event.target.value);

          }}

        />



        <button type="submit">

          Add

        </button>

      </form>





      {todos.map((eachTodo, index) => {

        return (

          <div

            key={eachTodo.id}

            className="todoBox"

          >

            <p>{eachTodo.todo}</p>



            <button

              onClick={() => {

                let copyTodos = [...todos];

                copyTodos.splice(index, 1);

                setTodos(copyTodos);

              }}

            >

              Delete

            </button>

          </div>

        );

      })}

    </div>

  );

}

export default App;