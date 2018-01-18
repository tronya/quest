import React, { Component } from "react";
import getRandomInt from "../Utils/getRandomInt";

class LoadingView extends Component {

  constructor(props){
    super(props);
    this.intervals = []
  }
  render() {
    return (
      <div className="main-loading">
        <div className="loading">
          <div className="particles" ref="elements-1">
            {this.createSnowItem(20, "rgba(255,255,0,.5)", 2)}
          </div>
          <div className="particles" ref="elements-2">
            {this.createSnowItem(5, "rgba(255,255,255,.5)", 4)}
          </div>
          <div className="particles" ref="elements-3">
            {this.createSnowItem(20, "rgba(255,255,250,.7)", 3)}
          </div>
          <div className="particles" ref="elements-4">
            {this.createSnowItem(5, "rgba(255,255,255,1)", 1)}
          </div>
          <p>Quest</p>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.refs && Object.keys(this.refs).forEach(
      el => this.createMotion(this.refs[el].childNodes)
    );
  }
  componentWillUnmount(){
    this.intervals.forEach(clearInterval);
  }
  getRandomColor() {
    const colors = [
      "green",
      "white",
      "grey",
      "blue",
      "red",
      "pink"
    ];
    return colors[getRandomInt(0, colors.length)]
  }

  createSnowItem(elements, color, radius = 1) {
    let snowArrays = [];
    let i = 0;
    while (i <= elements) {
      i++;
      snowArrays.push(
        <i key={i} className="dustItem" style={{
          background: color,
          width: radius + "px",
          height: radius + "px",
          boxShadow:
          getRandomInt(5, 10) + "px " +
          getRandomInt(3, 18) + "px " +
          getRandomInt(10, 25) + "px " +
          this.getRandomColor()
        }}>{i}</i>
      );
    }
    return snowArrays;
  }

  createMotion(el) {
    let sInterval = ((getRandomInt(1, 9) * 0.1) + getRandomInt(1, 3)) * 1000;
    this.makeMovements(el);
    let intervalMovements = setInterval(() => {
      this.makeMovements(el)
    }, sInterval);
    this.intervals.push(intervalMovements)
  }

  makeMovements(el) {
    el.forEach((i) => {
      i.style.top = getRandomInt(0, 100) + "px";
      i.style.left = getRandomInt(0, 400) + "px";
    });
  }

}

export default LoadingView;