function Body(args){
  args.system = args.system || null
  this.system = args.system
  this.position = args.position
  this.velocity = args.velocity
  this.mass = args.mass
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

Body.prototype.timeStep = function(dt){
  
};
