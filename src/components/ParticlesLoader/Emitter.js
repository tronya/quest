import Vector from "./Vector";
import Particle from "./Particle";

function Emitter(point, velocity, spread, color ="#999") {
  this.position = point; // Vector
  this.velocity = velocity; // Vector
  this.spread = spread || Math.PI / 32; // possible angles = velocity +/- spread
  this.drawColor = color; // So we can tell them apart from Fields later
  this.color = color;
}

Emitter.prototype.emitParticle = function() {
  // Use an angle randomized over the spread so we have more of a "spray"
  let angle = this.velocity.getAngle() + this.spread - (Math.random() * this.spread * 2);

  // The magnitude of the emitter's velocity
  let magnitude = this.velocity.getMagnitude();

  // The emitter's position
  let position = new Vector(this.position.x , this.position.y);

  // New velocity based off of the calculated angle and magnitude
  let velocity = Vector.fromAngle(angle, magnitude);

  let color = this.color
  // return our new Particle!
  return new Particle(position,velocity,false,color);
};

export default Emitter;