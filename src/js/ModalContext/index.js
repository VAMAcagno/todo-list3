import React from "react";
import { useModalContext } from "./useModalContext.js";
import { TodoContext } from "../../TodoContext/index.js";

const ModalContext = React.createContext();

function ModalProvider(props) {
    const {modal, setModal} = useModalContext();
    const {todos, setTodos, error, setError} = React.useContext(TodoContext);   

    ///
    /// Modal close and open
    ///
    const modalToggler = () => {
        setModal(!modal);
      } 
      ///
      /// Add new task for mobile version
      ///
      let resultMobile; 
      function handleChangeMobile(event) {
        resultMobile = event.target.value;
      } 
      const addNewTaskMobile = () => {
        try {
          let inputText = document.querySelector('.new-task-input-mobile');
          if (!inputText.value || !resultMobile) {
            return;
          } else {
            const newTodo = {taskText: inputText.value, completed: false, category: resultMobile};
            todos.unshift(newTodo);
            const newTodoList = todos.slice();
            localStorage.setItem('TODOS_V1', JSON.stringify(newTodoList));
            setTodos(newTodoList);
            inputText.value = "";
          }
        } catch (error) {
          setError(error);
        }
      };

      

    return (
        <ModalContext.Provider value={{
            modal,
            setModal,
            modalToggler,
            handleChangeMobile,
            addNewTaskMobile,
        }}>
            {props.children}
        </ModalContext.Provider>  
)}


export {ModalContext, ModalProvider}