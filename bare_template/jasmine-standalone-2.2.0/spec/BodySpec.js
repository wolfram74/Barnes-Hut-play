describe("Body tests", function() {

  beforeEach(function() {
  });

  it("should be able to run tests", function() {
    expect(true).toEqual(true);
  });

  it("Can be created with certain properties",function(){
    var args = {position:[0,1,0],velocity:[1,0,0],mass:10}
    var body = new Body(args)
    expect(body.constructor.name).toEqual("Body")
    expect(body.position).toBeDefined()
    expect(body.velocity).toBeDefined()
    expect(body.mass).toBeDefined()
  })
  it("Can be report on separation with another body",function(){
    var args = {position:[0,1,0],velocity:[1,0,0],mass:10}
    var args2 = {position:[2,0,0],velocity:[1,0,0],mass:10}
    var body = new Body(args)
    var body2 = new Body(args2)
    expect(body.displacement(body2)).toEqual([2,-1,0])
    expect(body2.displacement(body)).toEqual([-2,1,0])
  })
  it("Can calculate it's kinetic energy",function(){
    var args = {position:[0,1,0],velocity:[1,4,0],mass:10}
    var body = new Body(args)
    expect(body.kineticEnergy()).toEqual(85)
  })
  it("Can calculate it's potential energy if part of a system",function(){
    var data2 = {
      1:{position:[0,1,0],velocity:[1,3,0],mass:10},
      2:{position:[20,1,0],velocity:[4.1,3,0],mass:100}
    }
    var sys2 = new System(data2)
    expect(sys2.bodies[0].potentialEnergy()).toEqual(50)
  })
});
