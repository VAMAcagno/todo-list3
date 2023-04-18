import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TodoProvider } from './TodoContext';
import { ModalProvider } from './js/ModalContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <TodoProvider>
        <ModalProvider>
             <App />
        </ModalProvider>
    </TodoProvider>

);