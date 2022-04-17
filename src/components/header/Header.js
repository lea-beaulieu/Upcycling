import React from "react";

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
        <nav className="header-nav container flex-container">
          <h1 className="logo">
            <a className="logo-link" href="/">
              Zombie Apocalypse Team Selection
            </a>
          </h1>
          <button className="counter-button">
            Heroes in my team : {this.state.counter}
          </button>
        </nav>

        <section>
          <figure className="header-img">
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
