import React from "react";

function TaskDone(props){
    return(
        
            <div className="row align-items-center mt-2 mb-2">
                <div className="col-10">
                    <p className="m-0 p-1 task task-done">{props.text}</p>
                </div>
                <div className="col-2 p-0">
                    <i className="fas fa-trash-alt fa-lg d-block d-md-none"></i>
                    <input type="button" className="btn btn-danger btn-sm d-none d-md-block" value="DELETE"/>
                </div>
            </div>
        
    );
}

export default TaskDone;
