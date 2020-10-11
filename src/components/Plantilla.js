import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';

import it1 from '../it1.webp';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
import ReactTooltip from 'react-tooltip';
import witcher from '../witcher.webp';
import anime from '../anime.webp';
import Peliculas from './Peliculas';
import aven from '../aven.webp';
import among from '../among.webp';
import ready from '../ready.webp';




class Plantilla extends Component{
    render(){
        return(
            
            
            
             <div className="container clearfix">
                 <div id="carouselExampleControls" className="carousel slide d-flex " data-ride="carousel">
  <div className="carousel-inner side-barr">
    <div className="carousel-item active  "data-duration="150">
      <img className="d-block w-100" src={"https://www.10wallpaper.com/wallpaper/1366x768/1805/2018_Ready_Player_One_4K_HD_Movies_1366x768.jpg"} alt="First slide"></img>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={"https://c4.wallpaperflare.com/wallpaper/621/859/641/peliculas-terror-wallpaper-preview.jpg"} alt="Second slide"></img>
    </div>
    <div className="carousel-item">
    <NavLink to="./Reproductor">
      <img className="d-block w-100" src={"https://www.wallpapertip.com/wmimgs/35-353559_captain-marvel-wallpaper-4k.jpg"}alt="Third slide"></img>
      </NavLink> 
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>        
             <  div className="row">
             
                <section className="col-md-8">
                    <article className="Posts ">
                    <h1 className="brd-title">Ultimas Reseñas Agregadas</h1>
                <div className="Post">
                            <div className="title">   
                            <h4>Avengers End Game</h4>                    
                        </div>
                        <div className="thumb">
                        <NavLink to="./Reproductor">
                <img className="img-fluid zoom"src={aven}></img></NavLink>
                        </div>
                        </div>
                        <div className="Post ">
                            <div className="title correccion ">   
                            <h4 className="">Among us</h4>                    
                        </div>
                        <div className="thumb">
                <img className="img-fluid zoom"src={among}></img>
                        </div>
                        </div>
                        <div className="Post">
                            <div className="title">   
                            <h4>Avengers End Game</h4>                    
                        </div>
                        <div className="thumb">
                <img className="img-fluid zoom"src={aven}></img>
                        </div>
                        </div>
                    </article>
                    <article className="Posts clearfix">
                    <h1 className="brd-title">reseñas directorio q</h1>
                        <div className="Post">
                            <div className="title">   
                            <h4></h4>                    
                        </div>
                        <div className="thumb">
                        <img className="img-fluid zoom" src={it1} data-tip data-for="BOTONTOOLTIP"></img>
                        </div>
                        <div className="sinopsis">
                            <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                             cursus aliquet justo, quis eleifend arcu. Nullam ullamcorper, risus id commodo</p>
                        </div>
                        </div>
                        <div className="Post">
                            <div className="title">   
                            <h4></h4>                    
                        </div>
                        <div className="thumb">
                        <img className="img-fluid zoom" src={witcher} data-tip data-for="wich"></img>
                        </div>
                        <div className="sinopsis">
                            <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                             cursus aliquet justo, quis eleifend arcu. Nullam ullamcorper, risus id commodo</p>
                        </div>
                        </div>
                        <div className="Post">
                            <div className="title">   
                            <h4></h4>                    
                        </div>
                        <div className="thumb">
                        <img className="img-fluid zoom" src={anime} data-tip data-for="anime"></img>
                        </div>
                        <div className="sinopsis">
                            <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                             cursus aliquet justo, quis eleifend arcu. Nullam ullamcorper, risus id commodo</p>
                        </div>
                        </div>
                    </article>
                </section>
                <aside className="col-md-4">
                 <div className="side-bar">
                     <h3 className="brd-title">top reviews</h3>
                     <div className="content-side"></div>
                     <div className="side-day">
                         <h3>info</h3>
                         <div className="thumb">
                         <img className="img-fluid zoom" src={anime} data-tip data-for="anime"></img> 
                         </div>
                         <div className="sinopsis">description</div>
                     </div>
                     <div className="content-side"></div>
                     <div className="side-day">
                         <h3>info</h3>
                         <div className="thumb">
                             <a href="https://www.youtube.com/watch?v=kjmWRYk9wsA">
                         <img  className="img-fluid zoom" src={ready} data-tip data-for="anime"></img> </a>
                         </div>
                         <div className="sinopsis">description</div>
                     </div>

                 </div>
                </aside>

            </div>
            
            
            </div>
            
            
           
        )
    }
}



export default Plantilla;