import React, { Component } from "react";
import Chat from "../Teams/Chat";
// import "./Team.css";
import { connect } from "react-redux";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { updateSportsInfo, updateTeam } from "../../ducks/get_reducer";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import Roster from "./Roster";

class Team extends Component {
  constructor() {
    super();
    this.state = {
      togglePractice: false,
      teamEmails: "",
      emails: ""
    };
    this.myRef = React.createRef();
    this.schedulePractice = this.schedulePractice.bind(this);
    this.showPractice = this.showPractice.bind(this);
    this.getEmails = this.getEmails.bind(this);
  }

  componentDidMount() {
    this.props.updateSportsInfo();
  }

  schedulePractice() {
    let { teamEmails } = this.state;
    axios
      .post("/team/practice", { teamEmails })
      .then(response => {
        console.log(response);
      })
      .catch(err => console.log(err));
    this.showPractice();
  }

  showPractice() {
    let arr = this.props.team.map((e, i) => {
      return e.email;
    });
    this.setState({ teamEmails: arr });
    this.setState({
      togglePractice: !this.state.togglePractice
    });
  }

  getEmails(e) {
    this.setState({
      emails: e.target.value
    });
    console.log(this.state.emails);
  }

  scrollToDomRef = () => {
    const myDomNode = ReactDOM.findDOMNode(this.myRef);
    window.scrollTo(0, myDomNode.offsetTop);
  };

  render() {
    let { sportsInfo } = this.props;
    let arr = [];
    arr.push(sportsInfo);

    console.log(sportsInfo, "SPORTSINFO");

    var teamEmail = "";

    this.props.team.map((e, i) => {
      if (i === 0) {
        teamEmail = e.email;
      } else {
        teamEmail += ", " + e.email;
      }
    });

    return (
      <div id="teampagediv">
        <Carousel>
          <div>
            {/* <img
              alt=""
              src="https://images.fineartamerica.com/images-medium-large-5/closeup-of-american-football-on-field-danny-hooks.jpg"
            /> */}
          </div>
        </Carousel>
        <button onClick={() => this.scrollToDomRef()}>Practice!</button>
        {/* <div className="squaddiv">{squad}</div> */}
        <div className="chaticon">
          <Chat teamName={sportsInfo.team_name} />
        </div>
        <hr className="linebreak" />
        {this.state.togglePractice ? (
          <div className="schedulepracticediv">
            <input placeholder="Date and Time" />
            <textarea
              rows="3"
              columns="2"
              defaultValue={teamEmail}
              onChange={e => this.getEmails(e.target.value)}
              className="emailsofroster"
            />
            <textarea
              row="10"
              columns="4"
              defaultValue=""
              className="messagetoteam"
            />
            <button
              onClick={() => this.schedulePractice()}
              className="sendpracticeschedule"
            >
              Schedule Practice For {sportsInfo.team_name}
            </button>
          </div>
        ) : (
          <div
            onClick={() => this.showPractice()}
            className="schedulepracticediv"
          >
            <h4 className="schedulepracticetitle">Schedule Practice</h4>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.getReducer });

export default connect(
  mapStateToProps,
  { updateSportsInfo, updateTeam }
)(Team);
