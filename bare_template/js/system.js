function System(args){
  this.bodies = []
  for(var body in args){
    args[body].system = this
    this.bodies.push(new Body(args[body]))
  };
  this.dt = 1
  this.maxT = 1000
};

System.prototype.kineticEnergy = function(){
  var toteKE = 0
  for(var i=0; i < this.bodies.length; i++){
    toteKE += this.bodies[i].kineticEnergy()
  };
  return toteKE
};
System.prototype.potentialEnergy = function(){
  var totePE = 0
  for(var i=0; i < this.bodies.length; i++){
    totePE += this.bodies[i].potentialEnergy()
  };
  return totePE
};

System.prototype.timeStep = function(){
  for(var i=0; i < this.bodies.length; i++){
    this.bodies[i].timeStep(this.dt)
  };
};