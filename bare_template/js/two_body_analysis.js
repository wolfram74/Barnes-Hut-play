twoBodyUtils = (function(){
  var API = {}

  API.makeReduced = function(body1, body2){
    var redMass = (body1.mass*body2.mass)/(body1.mass+body2.mass)
    var negR2 = Utils.arrayScale(body2.position, -1)
    var sep = Utils.arrayAdd(body1.position, negR2)
    var mrad1 = Utils.arrayScale(body1.position, body1.mass)
    var mrad2 = Utils.arrayScale(body2.position, body1.mass)
    var sumRad = Utils.arrayAdd(mrad1, mrad2)
    var centMass = Utils.arrayScale(sumRad, body1.mass+body2.mass)
    var centered = Utils.arrayDif(sep, centMass)
    var sepDot = Utils.arrayDif(body1.velocity, body2.velocity)
    return new Body({position: centered, velocity: sepDot, mass: redMass})
  }

  API.makeCenter = function(body1, body2){
    var totalMass = body1.mass+body2.mass;
    var m1r1 = Utils.arrayScale(body1.position, body1.mass)
    var m2r2 = Utils.arrayScale(body2.position, body2.mass)
    var m1v1 = Utils.arrayScale(body1.velocity, body1.mass)
    var m2v2 = Utils.arrayScale(body2.velocity, body2.mass)
    var averagePos = Utils.arrayScale(
      Utils.arrayAdd(m1r1, m2r2),1/totalMass)
    var averageVel = Utils.arrayScale(
      Utils.arrayAdd(m1v1, m2v2),1/totalMass)
    var centerOfMass = new Body({
      position: averagePos,
      velocity: averageVel,
      mass: totalMass})
    return centerOfMass;
  }

  return API
})()
