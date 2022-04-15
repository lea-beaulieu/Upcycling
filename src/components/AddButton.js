import React from 'react';

class AddButton extends React.Component {
    state = {
      clicked:false,
      team:0,
    }  
  
    toggleBtnHandler = () => {
      return this.setState({
        clicked:!this.state.clicked,
        team:this.state.team +1,
      })
      
    }
    render() {
      
      const styles = ['btn'];
      let text = 'Hello Heroe';
      
      
      if (this.state.clicked) {
        styles.push('clicked');
        text = 'Bye Heroe';
      } 
      
      return (
      <div>
        <button className="btn" onClick={this.toggleBtnHandler}>{text}</button>
      </div>
      )
    }
  }
  
  export default AddButton;