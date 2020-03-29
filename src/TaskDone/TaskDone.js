import React from "react";
import moment from "moment";

function TaskDone(props){

    const handleDeleteClick = () => {
        if(window.confirm("¿Do you want to delete it?")){
            props.deleteTaskFunc(props.id);
        }
    };
    

    return(
        
            <div className="row align-items-center mt-2 mb-2">
                
                {props.completed === true && 
                <div className="col-7">
                    <p className="m-0 p-1 task task-done">{props.text}</p>
                </div>
                }
                {props.completed === true &&
                <div className="col-3">
                    <p className="m-0 p-1 dueDate">{moment(props.dueDate).format('Do MMM YYYY')}</p>
                </div>
                }
                <div className="col-2 p-0">
                {props.completed === true &&
                    <i className="fas fa-trash-alt fa-lg d-block d-md-none"></i>
                }
                {props.completed === true &&
                    <input type="button" className="btn btn-danger btn-sm d-none d-md-block" onClick = {handleDeleteClick} value="DELETE"/>
                }
                </div>
            </div>
        
    );
}

export default TaskDone;
