function Body(args){
  args.system = args.system || null
  this.system = args.system
  this.position = args.position
  this.velocity = args.velocity
  this.mass = args.mass
  this.deltaVel = null
  this.deltaPos = null
};

Body.prototype.kineticEnergy = function(){
  var vsquared = 0
  for(var i=0; i < this.velocity.length; i++){
    vsquared += (this.velocity[i]*this.velocity[i])
  };
  return vsquared*this.mass/2
};

Body.prototype.potentialEnergy = function(){
  var totePE = 0
  for(var i=0; i < this.system.bodies.length; i++){
    if( this != this.system.bodies[i]){
      totePE += this.twoBodyPE(this.system.bodies[i])
    };
  };
  return totePE*this.mass
};


Body.prototype.displacement = function(otherBody){
  var sepVec = []
  for(var i=0; i < this.position.length; i++){
    sepVec.push(otherBody.position[i]-this.position[i])
  };
  return sepVec
};

Body.prototype.twoBodyPE = function(otherBody){
  var sepVec = this.displacement(otherBody)
  return otherBody.mass/Utils.arrayMag(sepVec)
};

Body.prototype.calcDeltas = function(dt){
  this.deltaVel = new Array(this.velocity.length+1).join('0').split('').map(parseFloat)
  this.deltaPos = new Array(this.position.length+1).join('0').split('').map(parseFloat)
  this.acceleration = new Array(this.position.length+1).join('0').split('').map(parseFloat)
  for(var i=0; i < this.system.bodies.length; i++){
    if( this != this.system.bodies[i]){
      var other = this.system.bodies[i];
      var sepVec = this.displacement(other);
      var rcubed = Math.pow(Utils.arrayMag(sepVec), 3);
      var deltaAcc = Utils.arrayScale(sepVec, other.mass/rcubed);
      this.acceleration = Utils.arrayAdd(this.acceleration, deltaAcc);
    };
  };
  this.deltaPos = Utils.arrayScale(this.velocity, dt);
  // var adtdt2 = Utils.arrayScale(this.acceleration, (Math.pow(dt, 2)/2));
  // this.deltaPos = Utils.arrayAdd(this.deltaPos, adtdt2);
  this.deltaVel = Utils.arrayScale(this.acceleration, dt);
  // debugger
};

Body.prototype.timeStep = function(){
  this.position = Utils.arrayAdd(this.position, this.deltaPos);
  this.velocity = Utils.arrayAdd(this.velocity, this.deltaVel);
}