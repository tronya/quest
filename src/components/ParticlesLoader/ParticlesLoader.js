import React, { Component } from "react";
import Emitter from "./Emitter";
import Vector from "./Vector";
import Field from "./Field";
import getRandomInt from "../Utils/getRandomInt";

class ParticlesLoader extends Component {
  constructor(props) {
    super(props);
    this.maxParticles = 20000;
    this.particles = [];
    this.emissionRate = 6;
    this.particleSize = 1;
    this.objectSize = 2;
    this.randomEmitters = false
  }

  render() {
    return <canvas ref="canvas"/>;
  }

  componentDidMount() {
    this.canvas = this.refs.canvas;
    let { canvas } = this.refs;
    this.ctx = this.canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    this.midX = this.canvas ? this.canvas.width / 2 : 0;
    this.midY = this.canvas ? this.canvas.height / 2 : 0;


    this.emitters = [
      new Emitter(new Vector(getRandomInt(0,this.canvas.width), getRandomInt(0,this.canvas.height)), Vector.fromAngle(6, 2), 3.14, "#00edff"),
      new Emitter(new Vector(getRandomInt(0,this.canvas.width), getRandomInt(0,this.canvas.height)), Vector.fromAngle(6, 2), 3.14, "#c300ff"),
      new Emitter(new Vector(getRandomInt(0,this.canvas.width), getRandomInt(0,this.canvas.height)), Vector.fromAngle(6, 2), 3.14, "#a1ff00"),
    ];
    this.fields = [
      new Field(new Vector(
        getRandomInt(0,this.canvas.width), getRandomInt(0,this.canvas.height)), getRandomInt(-1000,1000)),
      new Field(new Vector(getRandomInt(0,this.canvas.width), getRandomInt(0,this.canvas.height)), getRandomInt(-1000,1000)),
      new Field(new Vector(getRandomInt(0,this.canvas.width), getRandomInt(0,this.canvas.height)), getRandomInt(-1000,1000)),
      new Field(new Vector(getRandomInt(0,this.canvas.width), getRandomInt(0,this.canvas.height)), getRandomInt(-1000,1000)),

    ];
    this.loop()
  }

  loop() {
    this.clear();
    this.update();
    this.draw();
    this.queue();
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  update() {
    this.addNewParticles();
    this.plotParticles(this.canvas.width, this.canvas.height);
  }

  draw() {
    this.emitters.forEach((emitter) => {
      this.drawParticles(emitter.color);
    });

    //this.fields.forEach(this.drawCircle);
    //this.emitters.forEach(this.drawCircle);
  }

  queue() {
    window.requestAnimationFrame(() => this.loop());
  }

  addNewParticles() {
    // if we're at our max, stop emitting.
    if (this.particles.length > this.maxParticles) return;

    // for each emitter
    for (let i = 0; i < this.emitters.length; i++) {
      // emit [emissionRate] particles and store them in our particles array
      if(this.randomEmitters){
        this.emitters[i].position = new Vector(getRandomInt(0,this.canvas.width),getRandomInt(0,this.canvas.height))
      };
      for (let j = 0; j < this.emissionRate; j++) {
        this.particles.push(this.emitters[i].emitParticle());
      }

    }
  }

  plotParticles(boundsX, boundsY) {
    // a new array to hold particles within our bounds
    let currentParticles = [];

    for (let i = 0; i < this.particles.length; i++) {
      let particle = this.particles[i];
      let pos = particle.position;

      // If we're out of bounds, drop this particle and move on to the next
      if (pos.x < 0 || pos.x > boundsX || pos.y < 0 || pos.y > boundsY) continue;

      // Update velocities and accelerations to account for the fields
      particle.submitToFields(this.fields);

      // Move our particles
      particle.move();

      // Add this particle to the list of current particles
      currentParticles.push(particle);
    }

    // Update our global particles reference
    this.particles = currentParticles;
  }

  drawParticles(color) {
    for (let i = 0; i < this.particles.length; i++) {
      //console.log(i, this.particles[i].color);
      this.ctx.fillStyle = this.particles[i].color;
      let position = this.particles[i].position;
      this.ctx.fillRect(position.x, position.y, this.particleSize, this.particleSize);
    }
  }

  drawCircle = (object) => {
    this.ctx.fillStyle = object.drawColor;
    this.ctx.beginPath();
    this.ctx.arc(object.position.x, object.position.y, this.objectSize, 0, Math.PI * 2);
    this.ctx.closePath();
    this.ctx.fill();
  }
}

export default ParticlesLoader;