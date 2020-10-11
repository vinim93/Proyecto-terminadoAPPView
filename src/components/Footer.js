
import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';
import facebook from '../facebook.webp';
import ReactTooltip from 'react-tooltip';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";

class Footer extends Component{
    render(){
        return(
<footer className="footer page-footer">
             <div className="container">
                 <h5>Todo  los derechos reservados<span className="nm-footer"> Appreview          <img className="img-fluid zoom img-face" src={facebook} data-tip data-for=""></img></span></h5>
                 
                 
                 
                 <section>
                 <NavLink to="./Politicadeprivacidad" className="footer"><h5>Politicadeprivacidad</h5></NavLink>
                     </section> 
             </div>
            </footer>
)




}}



export default Footer;