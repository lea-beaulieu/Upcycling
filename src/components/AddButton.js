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
    let text0 = "";
    let text = "Hello Heroe";
    let space ="";

    if (this.state.clicked) {
      styles.push("clicked");
      text0="🖤       ";
      space=<br></br>;
      text = "See you soon Heroe";
    }


    return (
      <div>
      {/*/ Styles join = btn + clicked*/}
        <button className={styles.join(' ')} onClick={this.toggleBtnHandler}>
        {text0}{space}{text}
        </button>
      </div>
    );
  }
}

/*
var LikeButton = React.createClass({
  getInitialState: function() {
    return {liked: false};
  },
  handleClick: function(event) {
    this.setState({liked: !this.state.liked});
  },
  render: function() {
    var text = this.state.liked ? 'liked' : 'like',
				stateClass = this.state.liked ? 'is-active' : '';
    return (
      <button onClick={this.handleClick} className={'button button-like ' + stateClass}>{text}</button>
    );
  }
});
*/

export default AddButton;