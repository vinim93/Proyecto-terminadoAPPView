import React from 'react';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
  
} from "react-router-dom";
import Peliculas from "./components/Peliculas";
import Series from "./components/Series";
import Animes from "./components/Animes";
import Reproductor from "./components/Reproductor";
import Plantilla from "./components/Plantilla";
import Pruebas from "./components/Pruebas";
import FacebookLogin from "react-facebook-login";
import Footer from './components/Footer';
import ReactTooltip from 'react-tooltip';
import Facebook from './components/Facebook';


function App(){
  return(
    <Router>
    <div className="App">
      <ReactTooltip id="BOTONTOOLTIP" type="info">
       IT 1
       </ReactTooltip>
       <ReactTooltip id="wich" type="info">
       witcher
       </ReactTooltip>
       <ReactTooltip id="anime" type="info">
       YOUR NAME 
       </ReactTooltip>
       <Pruebas/>
      <Switch>
        <Route path="/Peliculas"> <Peliculas/></Route>
        <Route path="/Series"> <Series/></Route>
        <Route path="/Animes"> <Animes/></Route>
        <Route path="/Reproductor"><Reproductor/></Route>
        <Route path="/" exact><Plantilla/></Route>
      </Switch>
      
      
      
      <Footer/>
    </div>
    </Router>
    
  )
}

//
// data
/*import { todos } from './todos.json';

// subcomponents
import TodoForm from './components/TodoForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  removeTodo(index) {
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index
      })
    });
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-title text-center">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              {todo.description}
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeTodo.bind(this, i)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )
    });

    // RETURN THE COMPONENT
    return (
      <div className="App">

        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="">
            Tasks
            <span className="badge badge-pill badge-light ml-2">
              {this.state.todos.length}
            </span>
          </a>
        </nav>

        <div className="container">
          <div className="row mt-4">

            <div className="col-md-4 text-center">
                <img src={logo} className="App-logo" alt="logo" />
              <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
            </div>

            <div className="col-md-8">
              <div className="row">
                {todos}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}*/

export default App;