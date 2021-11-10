import React from "react";

function TodoCreator() {
    return (
        <div className='todo-creator'>
            <input type='text' className='message' />
            <button className='btn add-todo'>add</button>
        </div>
    );
}
export default TodoCreator;
