function Body(args){
  args.system = args.system || null
  this.system = args.system
  this.position = args.position
  this.velocity = args.velocity
  this.mass = args.mass
};

Body.prototype.kineticEnergy = function(){
  var vsquared = 0
  for(i=0; i < this.velocity.length; i++){
    vsquared += (this.velocity[i]*this.velocity[i])
  };
  return vsquared*this.mass/2
};


Body.prototype.displacement = function(otherBody){
  var sepVec = []
  for(i=0; i < this.position.length; i++){
    sepVec.push(otherBody.position[i]-this.position[i])
  };
  return sepVec
};