import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { TodoProvider } from './js/TodoContext/index.js';
import { ModalProvider } from './js/ModalContext/index.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <TodoProvider>
        <ModalProvider>
             <App />
        </ModalProvider>
    </TodoProvider>

);