import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { Context } from "./App";
import './Todos.css'

const Todos = () => {
  const { todo, setTodo } = useContext(Context);

  const handleDelete = (index) => {
    let temp = [...todo];
    temp.splice(index, 1);
    setTodo(temp);
  };

  //   const handleDelete = (id) => {
  //     const newArray = text.filter((currEle) => {
  //         return currEle.id !== id;
  //     });
  //     setTodo(newArray);
  // };
  return (
    <div>
      <div className="todolist">
        {todo.map((todos, index) => {
          return (
            <div className="atodo">
              <h3 className="todo" key={index}>
                {todos}
              </h3>
              <div className="actions">
                <div onClick={() => handleDelete(index)} className="delete">
                  <MdDelete />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todos;
