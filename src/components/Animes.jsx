import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';

//import jquery from "jquery";
//import $ from "jquery";
import * as $ from "jquery";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
 
import anime from '../anime.webp';
import blue from '../blue.jpg';
import one from '../one.jpg';
import fate from '../fate.jpg';
import naru from '../naru.jpg';
import agua from '../agua.jpg';
import fatell from '../fatell.jpg';
import full from '../full.jpg';
import zod from '../zod.jpg';
import hell from '../hell.jpg';
class Animes extends Component{
    render(){
        return (
            <div className="container clearfix ">
      <div className="row">
                <section className="col-md-9 col-sm-9 col-12 cards-anime d-flex img-fluid">
              <                div className="card cards-anime" >
                             <NavLink to="./Reproductor">
                    <img className="card-img-top zoom size-img " src={anime} data-tip data-for="anime" alt="anime"></img>
                    </NavLink>
                       <div className="card-body">
                      <p className="card-text">Some quick example text to contents.</p>
                    
                   </div>
                   
                   </div>
                   < div className="card cards-anime" >
                    <img className="card-img-top zoom img-fluid" src={blue} data-tip data-for="anime" alt="anime" ></img>
                       <div className="card-body">
                      <p className="card-text">Some quick example text to content.</p>
                    
                   </div>
                   
                   </div> 
                   < div className="card cards-anime " >
                    <img className="card-img-top zoom" src={naru} data-tip data-for="anime" ></img>
                       <div className="card-body">
                      <p className="card-text">Some quick example text to content.</p>
                    
                   </div>
                   
                   </div> 
                   < div className="card cards-anime" >
                    <img className="card-img-top zoom" src={one} data-tip data-for="anime" ></img>
                       <div className="card-body">
                      <p className="card-text">Some quick example text content.</p>
                    
                   </div>
                   
                   </div> 
                   < div className="card cards-anime" >
                    <img className="card-img-top zoom" src={fate} data-tip data-for="anime"></img>
                       <div className="card-body">
                      <p className="card-text">Some quick example text content.</p>
                    
                   </div>
                   
                   </div> 
                   < div className="card cards-anime" >
                    <img className="card-img-top zoom" src={fatell} data-tip data-for="anime" ></img>
                       <div className="card-body">
                      <p className="card-text">Some quick example text content.</p>
                    
                   </div>
                   
                   </div> 
                   < div className="card cards-anime" >
                    <img className="card-img-top zoom" src={full} data-tip data-for="anime"></img>
                       <div className="card-body">
                      <p className="card-text">Some quick example text content.</p>
                    
                   </div>
                   
                   </div> 
                   < div className="card cards-anime" >
                    <img className="card-img-top zoom" src={zod} data-tip data-for="anime"></img>
                       <div className="card-body">
                      <p className="card-text">Some quick example text content.</p>
                    
                   </div>
                   
                   </div> 
                   < div className="card cards-anime" >
                    <img className="card-img-top zoom" src={agua} data-tip data-for="anime"></img>
                       <div className="card-body">
                      <p className="card-text">Some quick example text content.</p>
                    
                   </div>
                   
                   </div> 
                   < div className="card cards-anime" >
                    <img className="card-img-top zoom" src={hell} data-tip data-for="anime" alt="Card image cap"></img>
                       <div className="card-body">
                      <p className="card-text">Some quick example text content.</p>
                    
                   </div>
                   
                   </div> 
                   < div className="card cards-anime" >
                    <img className="card-img-top zoom" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaqiGCMkAIuHUYViUCYejthHlIzM-SN3XE6GFKJKjM2jI1Szo6h4S1UcxaPWc&s=10"} data-tip data-for="anime" alt="Card image cap"></img>
                       <div className="card-body">
                      <p className="card-text">Some quick example text content.</p>
                    
                   </div>
                   
                   </div> 
                   < div className="card cards-anime" >
                    <img className="card-img-top zoom" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjJQEypzJi7CUtJnJsnKf9szQulDUE43xixyDpSsPmxVkSP0Ieeg6VhANA9Q&s=10"} data-tip data-for="anime" alt="Card image cap"></img>
                       <div className="card-body">
                      <p className="card-text">Some quick example text content.</p>
                    
                   </div>
                   
                   </div> 

                   </section>
                   </div>
            </div>
        )
    }
}


export  default Animes; 