import React from "react";

const App = () => (
    <div className='App'>
        <div className='container'>
            <div className='todo-app'>
                <header>
                    <h1>todo app</h1>
                </header>
                <div className='todo-creator'>
                    <input type='text' className='message' />
                    <button className='btn add-todo'>add</button>
                </div>
                <div className='todos-list'>
                    <ul className='todos'>
                        <li className='todo-item'>some todo`s</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

export default App;
