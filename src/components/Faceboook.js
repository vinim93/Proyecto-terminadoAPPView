import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";

export default class Faceboook extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: ""
  };

  responseFacebook = response => {
    // console.log(response);

    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
  };

  componentClicked = () => console.log("clicked");

  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = (
        <div
          style={{
            width: "1px!important",
            margin: "10px!important",
            background: "dark",
            padding: "1px!important",
            color:"white"
          }}
        >
          <section className="thumb   d-flex">



          <img src={this.state.picture}className="btn btn-outline-primary my-2 my-sm-0 form-inline"  alt={this.state.name}/>
          <p className="texto-fa"> {this.state.name} 
          </p>
          </section>
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId="996787734079917"
          autoLoad={false}
          fields="name,email,picture"
         
          callback={this.responseFacebook}
             textButton="inicia sesion con Facebook"
          icon="fa-facebook"
          cssClass="boton-login"
    
                  
        
        />
      );
    }

    return <div>{fbContent}</div>;
  }
}
