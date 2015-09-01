describe("System tests", function() {
  it("should be able to run tests", function() {
    expect(true).toEqual(true);
  });
  describe("behavior",function(){
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
      expect(sys.bodies[0].position).not.toEqual([0,1,0])
    })
    it("can report on kinetic energy of system", function(){
      var data2 = {
        1:{position:[0,1,0],velocity:[1,3,0],mass:7}
      }
      var sys2 = new System(data2)    
      expect(sys2.kineticEnergy()).toEqual(35)
    })
    it("can report on kinetic energy of system with multiple bodies", function(){
      var data2 = {
        1:{position:[0,1,0],velocity:[1,3,0],mass:7},
        2:{position:[1,1,0],velocity:[4.1,3,0],mass:9}
      }
      var sys2 = new System(data2)
      expect(sys2.kineticEnergy()).toEqual(35+116.145)
    })
    it("can report on potential energy of system", function(){
      var data2 = {
        1:{position:[0,10,0],velocity:[1,3,0],mass:100},
        2:{position:[0,0,0],velocity:[4.1,3,0],mass:10}
      }
      var sys2 = new System(data2)
      expect(sys2.potentialEnergy()).toEqual(200)
      var data3 = {
        1:{position:[0,10,0],velocity:[1,3,0],mass:100},
        2:{position:[0,0,0],velocity:[4.1,3,0],mass:10},
        3:{position:[0,5,0],velocity:[72,.5,0],mass:50}
      }
      var sys3 = new System(data3)
      expect(sys3.potentialEnergy()).toEqual(2400)
    })


  })
  describe("accuracy", function(){
    function radial(theta, ){

    }
  })
});
