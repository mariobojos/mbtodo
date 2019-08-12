import React from 'react';
import './App.css';

import TodoItem from './components/TodoItem';
import todosData from "./components/todosData";

import ContactCard from "./components/ContactCard";

import Header from "./components/Header";
import Greeting from "./components/Greeting";
import PersonState from "./components/PersonState";
import LoginState from "./components/LoginState";
import Clock from "./components/Clock";
import Counter from "./components/Counter";
import LogoutState from "./components/LogoutState";

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
  constructor(props) {
    super(props);
    this.state = {
      answer: "Yes",
      todos: todosData,
      isLoggedOut: false,
      ob: {
        in: false
      },
      isLoading: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLogoutState = this.handleLogoutState.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      return prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    });
  }

  handleLogoutState() {
    this.setState(prevState => {
      return {
        isLoggedOut: !prevState.isLoggedOut,
        ob: { in: !prevState.ob.in }
      };
    });
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 1500);
  }

  render() {
    const todoComponent = this.state.todos.map(todo => <TodoItem key={todo.id} item={todo} handleChange={this.handleChange} />);

    return (
      <main>
        <div className="todo-list">
          {this.state.isLoading
            ? <h1>Loading components... pls wait!!!</h1>
            : ''
          }
          <Header who={{username: "Mario Ronel"}} />
          <Header />
          <Greeting />
          <LoginState />
          <h4>State 'answer' value is {this.state.answer}</h4>
           <PersonState />

          <Clock />

          <Counter />

          <LogoutState isLoggedOut={this.state.isLoggedOut} myOb={this.state.ob} handleLogoutState={this.handleLogoutState} />
          {/*<LogoutState LS={this.state.LS}  />*/}

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
