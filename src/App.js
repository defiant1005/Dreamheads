import React from "react"
import TodoList from "./Todo/TodoList";
import Context from "./Context"
import AddTodo from "./Todo/AddTodo";


function App() {
  const [todos, setTodos] = React.useState([
      {id: 1, title: "Владимир", num: "+7-999-888-77-66"},
      {id: 2, title: "Дмитрий", num: "+7-999-888-77-66"},
      {id: 3, title: "Екатерина", num: "+7-999-888-77-66"},
  ])


  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title, num) {
    setTodos(todos.concat([{
      title,
      num,
      id: Date.now()
    }]))
  }

  return (
    <Context.Provider value={{removeTodo}}>
      <div className="wrapper">
        <h1 className="title">Список контактов</h1>
        <AddTodo onCreate={addTodo}/>
        {todos.length ? <TodoList todos={todos}/> : <p className="paragraph">Контактов нет</p>}
        
      </div>
    </Context.Provider>
  );
}

export default App;
