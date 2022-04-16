import React from "react";
import "./AddButton.scss";



class AddButton extends React.Component {
  state = {
    clicked: false,
  };

  toggleBtnHandler = () => {
    this.props.onToogle(this.props.id);
    return this.setState({
      clicked: !this.state.clicked,
    });
  };
  render() {
    const styles = ["btn"];
    let text = "Hello Heroe";

    if (this.state.clicked) {
      styles.push("clicked");
      text = "Bye Heroe";
    }


    return (
      <div>
      {/*/ Styles join = btn + clicked*/}
        <button className={styles.join(' ')} onClick={this.toggleBtnHandler}>
          {text}
        </button>
      </div>
    );
  }
}


export default AddButton;

{/*

class App extends React.Component {
  state = {
    clicked:false
  }  

  toggleBtnHandler = () => {
    return this.setState({
      clicked:!this.state.clicked
    })
    
  }
  render() {
    const styles = ['button'];
    let text = 'Click me!';
    let bodyEl = document.body;
    
    if (this.state.clicked) {
      styles.push('clicked');
      text = 'Clicked!';
    } 
    return (
    <div className={app}>
      <button className={styles.join(' ')} onClick={this.toggleBtnHandler}>{text}</button>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));


*/}