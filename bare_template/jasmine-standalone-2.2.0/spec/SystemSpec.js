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

    }

    function makeTest(){
      var convertedInputSystem = new System(testModule.convert(solSystem.init))
      return convertedInputSystem
    };

    function makeFinal(){
      var convertedInputSystem = new System(testModule.convert(solSystem.finish))
      return convertedInputSystem
    }

    function compareMass(bodA, bodB){
      // takes two bodies, sorts by mass
      return bodB.mass - bodA.mass
    };

    // 1000*365*24*3600 = 31536000000
    // 10*365*24*3600 = 315360000
    // 24*3600 = 86400
    // [4.175252426875341, 5.914352839895022, 2.12098865777938, 0.07160473184390338, 0.2451012108923171, 64.7102927958228, 101.14323086842901, 29.405926992263716, 245.4034181669449, 64.7123758556356, 0.07304180800199876] //no forces
    // [0.0026627491549372773, 0.004605835192620837, 0.001138385798388316, 0.00030755197426387404, 0.0005474912012889217, 2.0782035460464128, 2.242801296408704, 0.7058394091172896, 3.018988161040425, 242.30951750720956, 0.0003400269876291168] // 10th day steps
    // [0.001224803853289515, 0.0017470752987773484, 0.0011365332214923708, 0.000307861045860202, 0.0005492586716695752, 0.09715101093566204, 1.7879455816329697, 0.08800177872547084, 1.37788482039026, 234.47316884278774, 0.0003404055889141563] // 100th day steps
    it("it matches well with observed data",function(){
      var testSys = makeTest()
      var compare = makeFinal()
      testSys.maxT = 315360000
      testSys.dt = 864
      console.time("10 years") 
      testSys.run()
      testSys.bodies.sort(compareMass)
      compare.bodies.sort(compareMass)
      var difference = []
      for(var i = 0; i <testSys.bodies.length ; i++){
        difference.push(Utils.arrayCompare(testSys.bodies[i].position, compare.bodies[i].position))
        expect(difference[i]).toBeCloseTo(0, 6)
      };
      console.log(difference)
      console.timeEnd("10 years")

    })

  })
});
