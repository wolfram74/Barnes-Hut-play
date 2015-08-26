describe("System tests", function() {
  it("should be able to run tests", function() {
    expect(true).toEqual(true);
  });

  it("can generate a list of bodies", function(){
    var data = {
      1:{position:[0,1,0],velocity:[1,0,0],mass:10},
      2:{position:[0,-1,0],velocity:[-1,0,0],mass:10},
      3:{position:[1,0,0],velocity:[0,-1,0],mass:10},
      4:{position:[-1,0,0],velocity:[0,1,0],mass:10},
    }
    var sys = new System(data)
    expect(sys.bodies.length).toEqual(4)
    expect(sys.bodies[0].constructor.name).toEqual("Body")
  })

  it("can evolve in time", function(){
    var data = {
      1:{position:[0,1,0],velocity:[1,0,0],mass:10}
    }
    var sys = new System(data)
    sys.timeStep()
    expect(sys.bodies[0].velocity).not.toEqual([0,1,0])
  })

});
