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
System.prototype.potentialEnergy = function(){
  var totePE = 0
  console.log('running potential energy check for system')
  for(var i=0; i < this.bodies.length; i++){
    totePE += this.bodies[i].potentialEnergy()
    console.log("checking body", i, totePE)
  };
  return totePE
};