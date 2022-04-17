import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AddButton from "./AddButton";
import Swal from "sweetalert2";
import "./AddButton.scss";

class Heroes extends React.Component {
  state = {
    heroesList: [],
  };

  getAllHeroes = () => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((response) => {
        this.setState({ heroesList: response.data.data });
      })
      .catch((err) => console.log("error", err));
  };

  componentDidMount() {
    this.getAllHeroes();
  }

  handleToogle = (id) => {
    // console.log("heroes");
    // console.log('id '+id);
    // console.log('this.props.heroes before');
    // console.log(this.props.heroes);
    let heroesCopy = this.props.heroes;
    var index = heroesCopy.indexOf(id);
    // console.log('index  ' + index);
    if (index > -1) {
      heroesCopy.splice(index, 1);
      // console.log(heroesCopy);
      // copy heroes
      this.props.setHeroes([...heroesCopy]);
    } else {
      if (heroesCopy.length < 3) {
        this.props.setHeroes([...heroesCopy, id]);
        console.log("heroes added before clicking", heroesCopy);
      } else {
        // custom the basic alert
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Sorry, you can select 3 heroes only !",
          confirmButtonColor: "#fb826a",
        });
      }
      //alert("Sorry, you can only chose 3 heroes !");
      // to do : populate HeroesCopy based on ID ?
      // .populate("id")
    }
  };

  render() {
    return (
      <>
        <div className="page-description container">
          <h2 className="page-title">Meet our heroes. Build your team.</h2>
          <p>
            Help us keeping our closets <strong>clean</strong> and{" "}
            <strong>sustainable</strong>. Select <strong>3 heroes</strong> and
            start fighting against fash-fashion zombies with your dream team.
            Don't wait any longer.
          </p>
        </div>
        <main className="main">
          <section className="page-container">
            <div className="card-container">
              {this.state.heroesList.map((hero) => {
                return (
                  <div className="card" key={`hero-${hero.id}`}>
                    <div className="card-figure">
                      <Link to={`/heroes/${hero.id}`}>
                        <img src={hero.avatar} alt=""></img>
                      </Link>
                    </div>

                    <div className="card-content">
                      <h3>{hero.first_name}</h3>
                    </div>
                    <AddButton id={hero.id} onToogle={this.handleToogle} />
                  </div>
                );
              })}
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default Heroes;
