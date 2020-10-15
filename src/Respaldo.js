 
 import React from 'react';

 import './App.css';
 import "bootstrap/dist/css/bootstrap.min.css";
 import Login from './Login';
 import {
   BrowserRouter as Router,
   Switch,
   Route,
   NavLink
   
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
 import Faceboook from './components/Faceboook';
 import Politicadeprivacidad from './components/Politicadeprivacidad';
 //import { app } from 'firebase';
 import fire from './fire';
 import { render } from '@testing-library/react';
 
 
 function Home({handleSignout}){
 
    return(
   <Router>
       <div className="App">
         <Pruebas
         
         />
         <section className="container" >
            
         <button type="button"className="btn btn-outline-primary button-Login-op pull-right" onClick={handleSignout} > Cerrar Sesion </button>
           
        
    </section>    
         <ReactTooltip id="BOTONTOOLTIP" type="info">
          IT 1
          </ReactTooltip>
          <ReactTooltip id="wich" type="info">
          witcher
          </ReactTooltip>
          <ReactTooltip id="anime" type="info">
          YOUR NAME 
          </ReactTooltip>
         
   
        
         <Switch>
           <Route path="/Peliculas"> <Peliculas/></Route>
           <Route path="/Series"> <Series/></Route>
           <Route path="/Animes"> <Animes/></Route>
           <Route path="/Reproductor"><Reproductor/></Route>
           <Route path="/Politicadeprivacidad"> <Politicadeprivacidad/></Route>
           <Route path="/" exact><Plantilla/></Route>
         </Switch>
         
         
         
         <Footer/>
       </div>
      
       </Router>
        
     )
   }
   export default Home;