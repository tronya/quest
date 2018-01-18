import React, { Component } from "react";
import getRandomInt from "../Utils/getRandomInt";

class LoadingBLock extends Component {
  constructor(props){
    super(props);
    this.intervals = []
  }
  render() {
    return (
      <div className="block-loading">
        <div className="loading">
          <div className="rotating-block">
            <div className="particles" ref="elements-1">
              {this.createElements(40, "#e63462", 2)}
            </div>
            <div className="particles" ref="elements-2">
              {this.createElements(40, "#FE5f55", 2)}
            </div>
            <div className="particles" ref="elements-3">
              {this.createElements(50, "#c7efcf", 1)}
            </div>
            <div className="particles" ref="elements-4">
              {this.createElements(50, "#fff", 1)}
            </div>
          </div>
        </div>
      </div>);
  }

  createElements(elements = 1, color = "", radius = 1) {
    let snowArrays = [];
    let i = 0;
    while (i <= elements) {
      i++;
      snowArrays.push(
        <i key={i} className="dustItem" style={{
          background: color,
          width: radius + "px",
          height: radius + "px"
        }}>{i}</i>
      );
    }
    return snowArrays;
  }

  componentDidMount() {
    this.refs && Object.keys(this.refs).forEach(
      el => this.createMotion(this.refs[el].childNodes)
    );
  }

  createMotion(el) {
      let sInterval = ((getRandomInt(1, 9) * 0.1) + getRandomInt(1, 3)) * 1000;
      this.makeMovements(el);
      let intervalMovements = setInterval(() => {
        this.makeMovements(el)
      }, sInterval);
      this.intervals.push(intervalMovements);
  }

  makeMovements(el) {
    el.forEach((i) => {
      i.style.top = getRandomInt(0, 100) + "px";
      i.style.left = getRandomInt(0, 100) + "px";
    });
  }

  componentWillUnmount() {
    this.intervals.forEach(clearInterval);
  }
}

export default LoadingBLock;