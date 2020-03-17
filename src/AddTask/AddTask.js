import React from "react";

function AddTask(){
    return(
        <div className="container sizeTodo">
            <div className="row align-items-center">
                <div className="col-10">
                    <input type="text" className="input-group" id="addTask" placeholder="Add your task here"/>
                </div>
                <div className="col-2">
                        <i className="fas fa-plus-circle fa-2x d-md-none pointer"></i>
                        <input type="button" className="btn btn-primary btn-sm d-none d-none d-md-block" value="ADD"/>

                </div>
            </div>
        </div>
    );
}

export default AddTask;



