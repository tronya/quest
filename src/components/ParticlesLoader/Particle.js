import Vector from "./Vector";

function Particle(point, velocity, acceleration, color = "white") {
  this.position = point || new Vector(0, 0);
  this.velocity = velocity || new Vector(0, 0);
  this.acceleration = acceleration || new Vector(0, 0);
  this.color = color;
}

Particle.prototype.submitToFields = function (fields) {
  // our starting acceleration this frame
  let totalAccelerationX = 0;
  let totalAccelerationY = 0;

  // for each passed field
  for (let i = 0; i < fields.length; i++) {
    let field = fields[i];

    // find the distance between the particle and the field
    let vectorX = field.position.x - this.position.x;
    let vectorY = field.position.y - this.position.y;

    // calculate the force via MAGIC and HIGH SCHOOL SCIENCE!
    let force = field.mass / Math.pow(vectorX * vectorX + vectorY * vectorY, 1.5);


    // add to the total acceleration the force adjusted by distance
    totalAccelerationX += vectorX * force;
    totalAccelerationY += vectorY * force;
    // let forceInt = parseInt(force);
    // //console.log(force);
    // if (force < 0.000001) {
    //   this.color = "#1600bc";
    // } else if (force < 0.00001) {
    //   this.color = "#2f18dd";
    // } else if (force < 0.0001) {
    //   this.color = "#6d5ee5";
    // } else if (force < 0.001) {
    //   this.color = "#ab35ff";
    // } else if (force < 0.01) {
    //   this.color = "#8711db";
    // } else if (force < 0.1) {
    //   this.color = "#560591";
    // }else if (force < 1) {
    //   this.color = "#e50404";
    // }
  }

  // update our particle's acceleration
  this.acceleration = new Vector(totalAccelerationX, totalAccelerationY);
};

Particle.prototype.move = function () {
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
};

export default Particle;