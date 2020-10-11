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

class Series extends Component{
    render(){
        return (
            <div className="container ">
               <div className="row">
                 <section className="col-md-9 cards-anime d-flex img-fluid">
              < div className="card cards-anime" >
              <NavLink to="./Reproductor">
                    <img className="card-img-top zoom size-img " src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR96MUkWdRJhNAAlCYY9oZrALnmgcrq2_UdSTDQjcbhDmo_FRaoPMdcAr5iLg&s=10"} data-tip data-for="anime" alt="Card image cap"></img>
                      </NavLink>
                       <div className="card-body">
                      <p className="card-text">Some quick example text to content.</p>
                    
                   </div>
                   
                   </div>
                   < div className="card cards-anime" >
                    <img className="card-img-top zoom img-fluid" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXrACLWQp3Zq8-7Tif379VxOXvvOPfhWYkGSTB_yOrr8D04UJgDh6YGnEOqA&s=10"} data-tip data-for="anime" alt="Card image cap"></img>
                       <div className="card-body">
                      <p className="card-text">Some quick example text to content.</p>
                    
                   </div>
                   
                   </div> 
                   < div className="card cards-anime " >
                    <img className="card-img-top zoom" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYQ6_cwasYh03wLI4iLQOLhW3Gi0ujBASqweFZY9pGTfJIGZkelgNhCfuCKIU&s=10"} data-tip data-for="anime" alt="Card image cap"></img>
                       <div className="card-body">
                      <p className="card-text">Some quick example text to content.</p>
                    
                   </div>
                   
                   </div> 
                   < div className="card cards-anime" >
                    <img className="card-img-top zoom" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnljGZjC_xHhqBVcU80R8mhJB_OlcBwaWH-p_AvWlWAr46wpoc2Rhvg_Qd4Z8&s=10"} data-tip data-for="anime" alt="Card image cap"></img>
                       <div className="card-body">
                      <p className="card-text">Some quick example text content.</p>
                    
                   </div>
                   
                   </div> 
                   < div className="card cards-anime" >
                    <img className="card-img-top zoom" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFN3aGurGGAiBIsnMS3kqmPIcvJgTz7ZhaDvMoMMpjK8OJH-62TC7AUXSjog&s=10"} data-tip data-for="anime" alt="Card image cap"></img>
                       <div className="card-body">
                      <p className="card-text">Some quick example text content.</p>
                    
                   </div>
                   
                   </div> 
                   < div className="card cards-anime" >
                    <img className="card-img-top zoom" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrf-N3f957GvnJtFszcc9PlvgAYbTUG4erXM2igQn7xzNBlSc79aQQevXTWQ&s=10"} data-tip data-for="anime" alt="Card image cap"></img>
                       <div className="card-body">
                      <p className="card-text">Some quick example text content.</p>
                    
                   </div>
                   
                   </div> 
                   < div className="card cards-anime" >
                    <img className="card-img-top zoom" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzDrfbeGRFenH_bdoF8EsMxMMjy7ITJZ9OPqEGwPKhjMZSnkb19e4Zior1ASY&s=10"} data-tip data-for="anime" alt="Card image cap"></img>
                       <div className="card-body">
                      <p className="card-text">Some quick example text content.</p>
                    
                   </div>
                   
                   </div> 
                   < div className="card cards-anime" >
                    <img className="card-img-top zoom" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXnLsto1Mv-ftCnLtvt-t0Qx5Y-F0j_Hm44fChicFJK1WeyhjLjtAz8RmUjw&s=10"} data-tip data-for="anime" alt="Card image cap"></img>
                       <div className="card-body">
                      <p className="card-text">Some quick example text content.</p>
                    
                   </div>
                   
                   </div> 
                   < div className="card cards-anime" >
                    <img className="card-img-top zoom" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHdV1o6IYZjJEk47vUirllMua7Ec6_2GiaKLMKwoXVIusdX8EFZFSmpucoyQ&s=10"} data-tip data-for="anime" alt="Card image cap"></img>
                       <div className="card-body">
                      <p className="card-text">Some quick example text content.</p>
                    
                   </div>
                   
                   </div> 
                   < div className="card cards-anime" >
                    <img className="card-img-top zoom" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnt4feq2f3wibZkTGP5H2NFeRb_Ns7x6YjMwAgKUaO9yvtWsgFaD-Lsz-UaN8&s=10"} data-tip data-for="anime" alt="Card image cap"></img>
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


export  default Series; 