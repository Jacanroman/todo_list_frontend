import React from 'react';


/* las funciones tienen que ser en mayusculas porque si no React
puede confundir la funcion con un componente de HTML por ejemplo
con <header> por eso le ponemos mayusculas */

function TaskCount(){
    return(
        <div className="row m-3">
                <div className="col-12">
                    <p className="task_title m-0 p-1">You have 1 incomplete task</p>
                </div>
        </div>
    );
}

export default TaskCount;