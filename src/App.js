import React, { useState, useEffect } from 'react';
import axios from 'axios';

//import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './Header/Header';
import TaskCount from './TaskCount/TaskCount';
import Task from "./Task/Task";
import Title from "./Title/Title";
import AddTask from "./AddTask/AddTask";
import TaskDone from "./TaskDone/TaskDone";
import Footer from "./Footer/Footer";




function App() {

  const [tasks, setTasks] = useState([]); //comenzamos con un empty array 

  useEffect(()=>{
    //Fetch tasks from BACKEND (GET) with axios.get y promises
    axios.get("https://b60xl2jgd9.execute-api.eu-west-1.amazonaws.com/dev/tasks")
    .then(response=>{
      //console.log("Succes",response);
      setTasks(response.data);
    })
    .catch(err =>{
      console.log("error",err);
    });

  },[]);
  
  
  // A function to delete a task from tasks array (based on ID), and update the state with the news
  // Any function that updates state should live where the state lives

  const deleteTask = (id) => {

   axios.delete(`https://b60xl2jgd9.execute-api.eu-west-1.amazonaws.com/dev/tasks/${id}`)
    .then(response =>{
      
      const filteredTasks = tasks.filter((task) => {
        if (task.TaskId === id) {
          return false;
        } else {
          return true;
        }
      });
      //Update the state with the new (shorter) array
      setTasks(filteredTasks);

    })
    .catch(err =>{
      console.log("API Error ",err);
    })

  }


  const markTaskComplete = (id) => { 
    
    axios.put(`https://b60xl2jgd9.execute-api.eu-west-1.amazonaws.com/dev/tasks/${id}`,{Completed:true})
      .then((response) =>{
        console.log("updated",response);
        //console.log(updTask)
        // Create a new array of updated tasks, where the completed propierty of the matching taks has been updated
        const newTasks = tasks.map((task) => {
        //return a value to put in the same position in the new array
        if (task.TaskId === id) {
          task.Completed = 1;
        }
          return task;
        });

        setTasks(newTasks);
        
      })
      .catch(err =>{
        console.log("Error Updating Task",err);
      })
    
  }


  const addNewTask = (text, date, userid=1) => {
    //Create a new task object based on the data passed as parameters
    const newTask = {
      Description: text,
      DueDate: date,
      UserId: userid 
    };


    axios.post(`https://b60xl2jgd9.execute-api.eu-west-1.amazonaws.com/dev/tasks`, newTask)
      .then(response =>{
        
        //Create a new array of tasks, which includes this new task
        // Avoid mutating arrays or object (push, pop,shift, splice, sort)
        //const copy = tasks.slice() esto es valido porque es una copia
        console.log(response.data)
        const newTasks = [...tasks, response.data];
        
        //use the setTasks function to update the state
        setTasks(newTasks);
      })
      .catch(err =>{
        console.log("Error creating task",err)
      })

    
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
          if (task.Completed === 0) {
            return <Task
              key={task.TaskId}

              deleteTaskFunc={deleteTask}
              markCompleteFunction={markTaskComplete}
              text={task.Description}
              dueDate={task.DueDate}
              completed={task.Completed}
              id={task.TaskId}
            />
          } else {
            return <TaskDone
              key={task.TaskId}

              deleteTaskFunc={deleteTask}
              text={task.Description}
              dueDate={task.DueDate}
              completed={task.Completed}
              id={task.TaskId} />
          }
        })}

      </div>

      <Footer />

    </div>
  );
}

export default App;
