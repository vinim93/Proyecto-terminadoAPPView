
import React from 'react';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './Login';
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
import Home from './Respaldo';
import ReactTooltip from 'react-tooltip';
import Faceboook from './components/Faceboook';
import Politicadeprivacidad from './components/Politicadeprivacidad';
//import { app } from 'firebase';
import fire from './fire';
import { render } from '@testing-library/react';







const Hero = ({handleSignout}) => {
    return(
        
        
            <section className="Hero">
                
                <button className=" button-Login-op"  onClick={handleSignout} > Cerrar Sesion </button>
            
                </section>
    );
    
};

export default Hero;