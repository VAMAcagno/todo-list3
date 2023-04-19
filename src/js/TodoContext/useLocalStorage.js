import React from "react";

function useLocalStorage (donde) {
    const [error, setError] = React.useState(false);
    const [todos, setTodos] = React.useState([]);
  
    React.useEffect(() => {
      try {
        const localStorageTodos = localStorage.getItem(donde);
      
        if (!localStorageTodos) {
          localStorage.setItem(donde, JSON.stringify([]));
  
        } else {
          setTodos(JSON.parse(localStorageTodos));
        }
      } catch (error) { 
        setError(error);
      }
    }, []);
  
    // const tasksTotal = todos.length;
    // const tasksLeft = todos.filter(todo => todo.completed == false).length;

    return {
        error,
        setError,
        todos,
        setTodos,
    }
}

export {useLocalStorage}