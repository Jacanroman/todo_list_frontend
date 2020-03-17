import React from 'react';
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

function App() {
  return (
    <div className="App">
      <Header />
      
      <main>
          <div className="container sizeTodo">
            <Title />
            <AddTask />
         
            <TaskCount />
          
          
            {/* Passing a prop of text to each Task component*/}
            <Task text="Do the dishes" urgent={true} />
            <Task text="Walk the dog"urgent={false}/>
            <Task text="Phone the vets"urgent={true}/>
            <Task text="Deflea the cat"urgent={false}/>
          
          
            {}
            <TaskDone text="Sleep a nap" />
            <TaskDone text="wash the dishes"/>
          </div>
        
      </main>
      <Footer />

    </div>
  );
}

export default App;
