function System(args){
  this.bodies = []
  for(var body in args){
    args[body].system = this
    this.bodies.push(new Body(args[body]))
  };
};

System.prototype.kineticEnergy = function(){
  var toteKE = 0
  for(var i=0; i < this.bodies.length; i++){
    toteKE += this.bodies[i].kineticEnergy()
  };
  return toteKE
};