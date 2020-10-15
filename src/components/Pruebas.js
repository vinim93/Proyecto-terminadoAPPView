import React, {Component} from "react";
import Login from '../Login';
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';
import Hero from '../Hero';
import fire from '../fire';
//import jquery from "jquery";
//import $ from "jquery";
import * as $ from "jquery"
import Peliculas from './Peliculas';
import logo from "../logo.svg";
import ReactDOM from "react-dom";
import App from "../App"
import Series from './Series';
import Animes from './Animes';
import Faceboook from './Faceboook';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import handleSignout from '../App'


class Pruebas extends Component{
 
  state={isPasswordShow: false
  }
  tooglePasswordVisiblity =()=>{
    const {isPasswordShow}= this.state;
    this.setState({isPasswordShow: !isPasswordShow});
  }; 

    render(){
      const {isPasswordShow}= this.state;
      
        return(
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container">
  <NavLink to="/"className="navbar-brand" >AppReview</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <NavLink to="/" className="nav-link" tabIndex="-1" activeClassName="active" aria-disabled="true">Inicio </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="./Peliculas" activeClassName="active" className="nav-link">Peliculas</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/Series"className="nav-link "   aria-disabled="true">Series</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/Animes" className="nav-link " tabIndex="-1" aria-disabled="true">Animes</NavLink>
      </li>
          </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="buscar"></input>
      <button className="btn btn-outline-success my-2 my-sm-0" type="button" data-toggle="modal" data-target="#Registro-modal">buscar</button>
      
      <Faceboook/>
    
     
    </form>
   
  </div>
  {/*--------------------modal---------------------------*/}
<div className="modal fade" id="Registro-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="Registro">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <form id="Registrate-form">
          <div className="form-group">
          
          </div>
          
          <Hero />
        </form>
      </div>
     
    </div>
  </div>
</div>
  </div>
</nav>

        )  
    }
}



export default Pruebas;