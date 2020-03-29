import React, { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './Header/Header';
import TaskCount from './TaskCount/TaskCount';
import Task from "./Task/Task";
import Title from "./Title/Title";
import AddTask from "./AddTask/AddTask";
import TaskDone from "./TaskDone/TaskDone";
import Footer from "./Footer/Footer";


//no podemos utilizar class se usa className
// igual que for se usa htmlFor
// JSX

/* when you click in the Delete button our application
needs to know this hapeened (Listen for the event)
Know which button was clicked?
Remove the relevant todo object from our state*/

/* Click on the done button 
our applications needs to know this happens
which button was clicked
change the value
*/

/* Adding a new task
Ensure the AddTask componen is Controlled- so that it know about what is being 
entered in the form
click on the add button
need to know that this happened
what is the state of the form when this click happens? - donde
//Add the new task (contructed based on the data in the form) to the tasks lists */



function App() {

  //const [counter,setCounter] = useState(0); 

  const [tasks, setTasks] = useState([

    {
      text: "Clean the dishes",
      completed: true,
      dueDate: "2020-11-05",
      id: uuidv4()
    },
    {
      text: "Walk the dog",
      completed: false,
      dueDate: "2020-12-05",
      id: uuidv4()
    },
    {
      text: "Phone the vets",
      completed: true,
      dueDate: "2020-10-03",
      id: uuidv4()
    },
    {
      text: "Deflea the cat",
      completed: false,
      dueDate: "2020-05-05",
      id: uuidv4()
    },
    {
      text: "clean the house",
      completed: false,
      dueDate: "2020-06-07",
      id: uuidv4()
    }
  ]);


  // A function to delete a task from tasks array (based on ID), and update the state with the news
  // Any function that updates state should live where the state lives

  const deleteTask = (id) => {
    // delete the task with the id from the tasks array
    // tasks.splice(index?,1)

    const filteredTasks = tasks.filter((task) => {
      if (task.id === id) {
        return false;
      } else {
        return true;
      }
    });

    //Update the state with the new (shorter) array
    setTasks(filteredTasks);
  }


  const markTaskComplete = (id) => {
    // Create a new array of updated tasks, where the completed propierty of the matching taks has been updated
    const newTasks = tasks.map((task) => {
      //return a value to put in the same position in the new array
      if (task.id === id) {
        task.completed = true;
      }
      return task;
    });

    setTasks(newTasks)
  }



  const addNewTask = (text, date) => {
    //Create a new task object based on the data passed as parameters
    const newTask = {
      text: text,
      dueDate: date,
      completed: false,
      id: uuidv4() //  TODO: UUID-- use the uuid package NPM
    }

    //Create a new array of tasks, which includes this new task
    // Avoid mutating arrays or object (push, pop,shift, splice, sort)
    //const copy = tasks.slice() esto es valido porque es una copia
    const newTasks = [...tasks, newTask]

    //use the setTasks function to update the state
    setTasks(newTasks)
  }


  return (
    <div className="App">
      <Header />
      <div className="container sizeTodo">
        <Title />
        <AddTask addNewTaskFunc={addNewTask} />

        <TaskCount count={tasks.length} />

        {/* Passing a prop of text to each Task component*/}
        {tasks.map((task) => {
          if (task.completed === false) {
            return <Task
              key={task.id}

              deleteTaskFunc={deleteTask}
              markCompleteFunction={markTaskComplete}
              text={task.text}
              dueDate={task.dueDate}
              completed={task.completed}
              id={task.id}
            />
          } else {
            return <TaskDone
              key={task.id}

              deleteTaskFunc={deleteTask}
              text={task.text}
              dueDate={task.dueDate}
              completed={task.completed}
              id={task.id} />
          }
        })}

      </div>

      <Footer />

    </div>
  );
}

export default App;
