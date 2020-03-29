import React, {useState} from "react";
import moment from 'moment';

// Any component can keep track of its own state, if parent components don't need
// to know about this state
/*This component is now a Controlled Componen (a controlled form)*/


function AddNewTask(props) {
    
    // Create some initial state for the form
    const [taskText, setTaskText] = useState("");
    //const [date,setDate] = useState("2020-03-28"); // TODO: use moment to set initial date to 1 week from now
    const [date,setDate] = useState(moment().format('YYYY-MM-DD'));

    const handleTextChange = (event)=>{
        setTaskText(event.target.value);
    }

    const handleDateChange = (event)=>{
        setDate(event.target.value)
    }

    const handleAddTask = () =>{
        if(taskText === ""){
            alert("Add at least one thing to do")
        }else if(date === ""){
            alert("Date required")
        }else{
            props.addNewTaskFunc(taskText, date);
            setTaskText("")
            setDate(moment().format('YYYY-MM-DD'))
        }
       
    }
        

    // Make sure we can listen to any events that happen in the form, update state accordingly
    return (
        <div className="row align-items-center">
            <div className="col-10 col-md-7">
                <input type="text" className="form-control"  id="addTask" value = {taskText} onChange={handleTextChange} />
            </div>
            <div className="col-10 col-md-3">
                <input type="date" className="form-control" id="addTaskdate" value = {date} onChange={handleDateChange}/>
            </div>
            <div className="col-2">
                <i className="fas fa-plus-circle fa-2x d-md-none pointer"></i>
                <input type="button" className="btn btn-primary btn-sm d-none d-none d-md-block" value="ADD" onClick={handleAddTask} />

            </div>
        </div>
    );
}

export default AddNewTask;



