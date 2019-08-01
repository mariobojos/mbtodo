import React from 'react';
import './App.css';

import TodoItem from './components/TodoItem';
import todosData from "./components/todosData";

import ContactCard from "./components/ContactCard";

import Header from "./components/Header";
import Greeting from "./components/Greeting";
import PersonState from "./components/PersonState";
import LoginState from "./components/LoginState";

// function App() {
//
//   const todoComponent = todosData.map(todo => <TodoItem key={todo.id} item={todo} />);
//
//   return (
//     <main>
//       <div className="todo-list">
//         <Header who={{username: "Mario Ronel"}} />
//         <Header />
//         <Greeting />
//
//         { todoComponent }
//         <ContactCard
//             contact={{name: "Mr. Kritter", imgUrl: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", phone: "(212) 555-6785-1234", email: "mr.kritter@nappy.com"}} />
//         <ContactCard
//             contact={{name: "Mr. Scratcher", imgUrl: "http://placekitten.com/200/300", phone: "(212) 555-6785-1234", email: "mr.kritter@nappy.com"}} />
//         <ContactCard
//             contact={{name: "Ms. Catspaw", imgUrl: "http://placekitten.com/g/200/300", phone: "(212) 555-3289-4321", email: "ms.catspaw@nappy.com"}} />
//       </div>
//     </main>
//   );
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      answer: "Yes",
      todos: todosData
    }
  }

  render() {
    const todoComponent = this.state.todos.map(todo => <TodoItem key={todo.id} item={todo} />);

    return (
      <main>
        <div className="todo-list">
          <Header who={{username: "Mario Ronel"}} />
          <Header />
          <Greeting />
          <LoginState />
          <h4>State 'answer' value is {this.state.answer}</h4>


          <PersonState />

          { todoComponent }
          <ContactCard
            contact={{name: "Mr. Kritter", imgUrl: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", phone: "(212) 555-6785-1234", email: "mr.kritter@nappy.com"}} />
          <ContactCard
            contact={{name: "Mr. Scratcher", imgUrl: "http://placekitten.com/200/300", phone: "(212) 555-6785-1234", email: "mr.kritter@nappy.com"}} />
          <ContactCard
            contact={{name: "Ms. Catspaw", imgUrl: "http://placekitten.com/g/200/300", phone: "(212) 555-3289-4321", email: "ms.catspaw@nappy.com"}} />
        </div>
      </main>
    );
  }
}


export default App;
