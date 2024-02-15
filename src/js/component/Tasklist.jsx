import React, {useState} from "react";
import { RiDeleteBinLine } from "react-icons/ri";

const Tasklist = () => {
  const [task, setTask] = useState ("")
  const [todos, setTodos] = useState ([])



  return (
    <>
      <ul>
        <li>
            <input type="text" 
            onChange={(e)=>setTask(e.target.value)} //Traemos un valor que nos proporciona el input al setTask
            value={task} // Añadimos el valor que entró desde el input a la variable llamada task
            onKeyDown={(addElement)=>{
              if(addElement.key === "Enter") {  // Cada vez que pulse enter agregaré un nuevo task a la lista.
                setTodos(todos.concat(task)); // actualiza el estado de la lista de tareas, concatena el nuevo elemento.
                setTask("")}//<---setTask se vuelve 0 cada vez que se aprieta enter.
              }
            }   
            className="Addtask"
            placeholder="What needs to be done?">
            </input>
        </li>

        {todos.map((value, index) => ( //mapeo el array llamado todos.
           <li className="tasklist">
             {value} 
             <span 
                  onClick={() => 
                      setTodos(
                        todos.filter(
                          (value ,newArray) =>
                             index != newArray))} className="tasklist"><RiDeleteBinLine className="icon"/></span>
           </li>
         ))}

      </ul>
      <div>{todos.length} taks</div>
    </>
  );
};

export default Tasklist;
 