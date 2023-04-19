import React from "react";
import { useLocalStorage } from "./useLocalStorage.js";
import { isLaptopDevice, isBiggerThanLaptop, isMobileDevice, isTabletDevice } from "responsive-react";


//Creo un context
const TodoContext = React.createContext();


//Creo una funcion que devuelve mis funciones/estados/variables
function TodoProvider(props) {
    const {
        error,
        setError,
        todos,
        setTodos,
    } = useLocalStorage('TODOS_V1');

    const tasksTotal = todos.length;
    const tasksLeft = todos.filter(todo => todo.completed == false).length;

    const deleteTask =  (index) => {
        const newTodos = todos.slice();
        newTodos.splice(index, 1)
        localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
        setTodos(newTodos);
      }
    
      const completeTask = (index) => {
        if (todos[index].completed === false) {
          const newTodos = todos.slice();
          const doneTodo = todos[index];
          newTodos[index].completed = !newTodos[index].completed;
          newTodos.splice(index, 1);
          newTodos.push(doneTodo);
          localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
          setTodos(newTodos);
        } else {
          const newTodos = todos.slice();
          const doneTodo = todos[index];
          doneTodo.completed = !doneTodo.completed;
          newTodos.splice(index, 1);
          newTodos.unshift(doneTodo);
          localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
          setTodos(newTodos);
        }
      }

      let result;

      function handleChange(event) {
        result = event.target.value;
      }

      const addNewTask = () => {
        try {
          let inputText = document.querySelector('.new-task-input');
          if (!inputText.value || !result) {
            return;
          } else {
            const newTodo = {taskText: inputText.value, completed: false, category: result};
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

      const laptopSize = isLaptopDevice();
      const biggerL = isBiggerThanLaptop();


      //Aca devuelvo todo en el return pero si o si como un VALUE dentro del TodoContext.Provider sino despues no funciona
    return (
        <TodoContext.Provider value={{
            error,
            setError,
            todos,
            setTodos,
            tasksTotal,
            tasksLeft,
            addNewTask,
            completeTask,
            deleteTask,
            handleChange,
            laptopSize,
            biggerL,
        }}>

            {/* Estos props que vienen aca es donde va a ir, por asi decirlo, el <App> cuando llame al provider */}
            {props.children}
        </TodoContext.Provider>  
    )
}

export {TodoContext, TodoProvider}

//<TodoContext.Consumer></TodoContext.Consumer>