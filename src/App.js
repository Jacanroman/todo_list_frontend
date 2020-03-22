import React, {useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import TaskCount from './TaskCount/TaskCount';
import Task from "./Task/Task";
import Title from "./Title/Title";
import AddTask from "./AddTask/AddTask";
import TaskDone from "./TaskDone/TaskDone";
import Footer from "./Footer/Footer"

//no podemos utilizar class se usa className
// igual que for se usa htmlFor
// JSX
/*
<h4>{counter}</h4>
          <button onClick={()=>setCounter(counter+1)}>Increase counter</button>
*/

function App() {

  //const [counter,setCounter] = useState(0); 
  
  const [tasks, setTasks] = useState([

    {
      text:"Clean the dishes",
      completed:true,
      dueDate:"2020-11-05",
      id:1
    },
    {
      text:"Walk the dog",
      completed:false,
      dueDate:"2020-12-05",
      id:2
    },
    {
      text:"Phone the vets",
      completed:true,
      dueDate:"2020-10-03",
      id:3
    },
    {
      text:"Deflea the cat",
      completed:false,
      dueDate:"2020-05-05",
      id:4
    }
  ]);
  
  return (
    <div className="App">
      <Header />
          <div className="container sizeTodo">
            <Title />
            <AddTask />
            <TaskCount count={tasks.length}/>     

            {/* Passing a prop of text to each Task component*/}
            {tasks.map((task) => {
              return <Task key={task.id} text={task.text} dueDate={task.dueDate} completed={task.completed} />
            })}
          
            {}
            <TaskDone text="Sleep a nap" dueDate="28-05-2014" />
            <TaskDone text="wash the dishes"/>
          </div>
        
      
      <Footer />

    </div>
  );
}

export default App;
