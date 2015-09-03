function System(args){
  this.bodies = []
  for(var body in args){
    var bodyCopy = Utils.clone(args[body])
    bodyCopy.system = this
    this.bodies.push(new Body(bodyCopy))
  };
  this.dt = 1
  this.maxT = 1000
  this.time = 0
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
    this.bodies[i].calcDeltas(this.dt)
  };
  for(var i=0; i < this.bodies.length; i++){
    this.bodies[i].timeStep()
  };
};

System.prototype.run = function(){
  while(this.time < this.maxT){
    this.timeStep()
    this.time += this.dt
  };
};