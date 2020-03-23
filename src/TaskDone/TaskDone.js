import React from "react";
import moment from "moment";

function TaskDone(props){
    return(
        
            <div className="row align-items-center mt-2 mb-2">
                
                {props.completed === false && 
                <div className="col-7">
                    <p className="m-0 p-1 task task-done">{props.text}</p>
                </div>
                }
                {props.completed === false &&
                <div className="col-3">
                    <p className="m-0 p-1 dueDate">{moment(props.dueDate).format('Do MMM YYYY')}</p>
                </div>
                }
                <div className="col-2 p-0">
                {props.completed === false &&
                    <i className="fas fa-trash-alt fa-lg d-block d-md-none"></i>
                }
                {props.completed === false &&
                    <input type="button" className="btn btn-danger btn-sm d-none d-md-block" value="DELETE"/>
                }
                </div>
            </div>
        
    );
}

export default TaskDone;
