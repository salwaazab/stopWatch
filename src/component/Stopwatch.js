import React, { Component } from "react";
import "../App.css";

class Stopwatch extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0
  };

  startTimer = () => {
    if(this.state.timerOn === false && this.state.timerTime === 0 ){
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart
      });
    }, 10);}
  };

  stopTimer = () => {
    if (this.state.timerOn === true ){
    this.setState({ timerOn: false });
    clearInterval(this.timer);
    }
  };

  resetTimer = () => {
    if(this.state.timerOn === false && this.state.timerTime > 0 ){
    this.setState({
      timerStart: 0,
      timerTime: 0
    });
}
  };

  render() {
    const { timerTime } = this.state;
    let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
    return (
      <div className="Stopwatch">
      
        <div className="Stopwatch-display">
        <div className="Stopwatch-header"><h1>Stopwatch</h1></div>
          {hours} : {minutes} : {seconds} : {centiseconds}
        </div>
        
          <button id="start" onClick={this.startTimer}>START</button>
    
        
          <button id ="stop" onClick={this.stopTimer}>STOP</button>
        
       
        
          <button id ="reset" onClick={this.resetTimer}>RESET</button>
         
      </div>
    );
  }
}

export default Stopwatch;