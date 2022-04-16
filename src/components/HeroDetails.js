import React from "react";
import axios from "axios";

class HeroDetails extends React.Component {
  state = {
    singleHero: "",
  };

  getSingleHero = () => {
    axios
      .get(`https://reqres.in/api/users/${this.props.id}`)
      .then((response) => {
        console.log("singleHero", response.data.data);
        this.setState({ singleHero: response.data.data });
      })
      .catch((err) => console.log("error", err));
  };

  componentDidMount() {
    this.getSingleHero();
  }

  render() {
    return (
      <div className="single-beer-container">
        <h2>More Details about {this.state.singleHero.first_name} </h2>
        <img src={this.state.singleHero.avatar} alt=""></img>
        <div className="cols">
          <div className="col-left">
            <p>
              {this.state.singleHero.first_name}{" "}
              {this.state.singleHero.last_name}
            </p>
            <p>Contact : {this.state.singleHero.email}</p>
          </div>
          <div className="col-right"></div>
        </div>
      </div>
    );
  }
}

export default HeroDetails;
