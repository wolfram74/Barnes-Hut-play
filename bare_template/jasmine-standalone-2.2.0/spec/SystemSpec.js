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
    it("if a final time is given, will iterate until reached",function(){
      var sys = new System();
      expect(sys.time).toEqual(0)
      sys.run()
      expect(sys.time).toEqual(sys.maxT)
    });



  })
  describe("accuracy", function(){
    function radial(theta, epsi, constant){
      var denom = 1 + epsi*Math.cos(theta)
      return constant / denom
    }

    function constantCalc(m1, m2, r0, v0){
      var denom = m2*Math.pow(m1, 2)
      var numer = Math.pow(m1*r0*v0, 2)
      return numer/denom
    };

    function epsiCalc(m1, m2, r0, v0, constant){
      var left = (1/r0- r0*v0/(m2*m1))*constant
    }
    function cartesianConvert(body){
      var theta = Math.atan2(body.position[1],body.position[0])
      var radius = Utils.arraymag(body.position)
      return [theta, radius]
    }

    function makeTest(){
      var convertedInputSystem = new System(testModule.convert(solSystem.init))
      return convertedInputSystem
    };

    function makeFinal(){
      var convertedInputSystem = new System(testModule.convert(solSystem.finish1001))
      return convertedInputSystem
    }

    function compareMass(bodA, bodB){
      // takes two bodies, sorts by mass
      return bodB.mass - bodA.mass
    };

    xit("it matches well with observed data",function(){
      var testSys = makeTest()
      var compare = makeFinal()
      testSys.maxT = 31536000
      testSys.dt = 86.4
      console.time("1 year") 
      testSys.run()
      testSys.bodies.sort(compareMass)
      compare.bodies.sort(compareMass)
      var difference = []
      for(var i = 0; i <testSys.bodies.length ; i++){
        difference.push(Utils.arrayCompare(testSys.bodies[i].position, compare.bodies[i].position))
        expect(difference[i]).toBeCloseTo(0, 6)
      };
      // for(var i = 0; i <testSys.bodies.length ; i++){
      //   console.log(difference[i], compare.bodies[i].mass)
      // };
      console.log(difference)
      console.timeEnd("1 year")
    })

    it("it matches well with the solved 2 body problem",function(){
      var data1 = {
        1:{position:[0,0,0],velocity:[0,0,0],mass:1e6},
        2:{position:[0,0,0],velocity:[0,0,0],mass:1}
      }
    });
  });
});
