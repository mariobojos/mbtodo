import React from 'react';
import './App.css';

import TodoItem from './components/TodoItem';
import todoData from "./components/todosData";

import ContactCard from "./components/ContactCard";

function App() {

  const todoComponent = todoData.map(todo => <TodoItem key={todo.id} item={todo} />)

  return (
    <div className="todo-list">
      { todoComponent }
      <ContactCard
          contact={{name: "Mr. Kritter", imgUrl: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", phone: "(212) 555-6785-1234", email: "mr.kritter@nappy.com"}} />
      <ContactCard
          contact={{name: "Mr. Kritter", imgUrl: "http://placekitten.com/200/300", phone: "(212) 555-6785-1234", email: "mr.kritter@nappy.com"}} />
      <ContactCard
          contact={{name: "Ms. Catspaw", imgUrl: "http://placekitten.com/g/200/300", phone: "(212) 555-3289-4321", email: "ms.catspaw@nappy.com"}} />
    </div>
  );
}

export default App;
