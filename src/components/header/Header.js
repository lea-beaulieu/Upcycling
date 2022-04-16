import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  state = {
    counter: 0,
  };

  // componentWillReceiveProps deprecated but working
  componentWillReceiveProps(nextProps) {
    this.setState(() => {
      return {
        counter: nextProps.heroes.length,
      };
    });
  }
  render() {
    return (
      <div>
        <nav class="header-nav container flex-container">
          <h1 class="logo">
            <a class="logo-link" href="/">
              Zombie Apocalypse Team Selection
            </a>
          </h1>
          <button class="counter-button">
            Heroes in my team : {this.state.counter}
          </button>
        </nav>

        <section>
          <figure class="header-img">
            <img
              className="home-img"
              src="https://raw.githubusercontent.com/lea-beaulieu/Upcycling/main/src/components/assets/ZOMBIE.png"
              alt="Zombie"
            ></img>
          </figure>
        </section>
      </div>
    );
  }
}

export default Header;
