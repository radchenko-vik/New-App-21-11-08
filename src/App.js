import React from "react";
import Header from "./components/header";

const App = () => (
    <div className='App'>
        <div className='container'>
            <div className='todo-app'>
                <Header />
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
