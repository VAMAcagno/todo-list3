import { useState } from "react";
import React from "react";

function useLocalStorage () {
    const localStorageTodos = localStorage.getItem('TODOS_V1');
    let parsedTodos;
  
    if (!localStorageTodos) {
      localStorage.setItem('TODOS_V1', JSON.stringify([]));
      parsedTodos = [];
    } else {
      parsedTodos = JSON.parse(localStorageTodos);
    }
  
    const [todos, setTodos] = React.useState(parsedTodos);
  
    const saveTodos = (index) => {
      if (todos[index].completed === false) {
        const newTodos = todos.slice();
        const doneTodo = todos[index];
        newTodos[index].completed = !newTodos[index].completed;
        newTodos.splice(index, 1);
        newTodos.push(doneTodo);
        //parsedTodos = newTodos;
        localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
        setTodos(newTodos);
      } else {
        const newTodos = todos.slice();
        const doneTodo = todos[index];
        doneTodo.completed = !doneTodo.completed;
        newTodos.splice(index, 1);
        newTodos.unshift(doneTodo);
        //parsedTodos = newTodos;
        localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
        setTodos(newTodos);
      }
    }
  
    const deleteTodos = (index) => {
      const newTodos = todos.slice();
      newTodos.splice(index, 1);
      //parsedTodos = newTodos;
      localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
      setTodos(newTodos);
    }
  
    const newTodo = (newTodoList) => {
      setTodos(newTodoList);
    }
  
    return [todos, saveTodos, deleteTodos, newTodo];
  }
  export {useLocalStorage};