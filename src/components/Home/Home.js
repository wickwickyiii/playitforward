import React, { Component } from "react";
import "./Home.css";
import Nav from "../NavBar/Nav";
import AdultButton from "../Adults/AdultButton";
import KidButton from "../Kids/KidButton";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="title">
          <div className="video-background">
            <div className="video-foreground">
              <h1>PLAY IT FORWARD</h1>
            </div>
          </div>
        </div>

        <div className="buttons">
          <KidButton />
          <AdultButton />
        </div>
      </div>
    );
  }
}

export default Home;