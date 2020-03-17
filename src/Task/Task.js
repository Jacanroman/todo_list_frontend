import React from "react";


// props = {text:"Do the dishes", urgent: true}
//<p>{props.text} - {props.urgent === true ? "URGENT" : ""}</p>

function Task(props){
    return(
        
            <div className="row align-items-center mt-2 mb-2">
                    <div className="col-8">
                        <p className="m-0 p-1 task">{props.text}</p>
                    </div>
                    <div className="col-2 p-0">
                        <i className="fas fa-check-circle fa-lg d-block d-md-none"></i>
                        <input type="button" className="btn btn-success btn-sm d-none d-md-block" value="DONE"/>
                    </div>
                    <div className="col-2 p-0">
                        <i className="fas fa-trash-alt fa-lg d-block d-md-none"></i>
                        <input type="button" className="btn btn-danger btn-sm d-none d-md-block" value="DELETE"/>
                    </div>
            </div>
        
    );
}

export default Task;