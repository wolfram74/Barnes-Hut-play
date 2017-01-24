xdescribe("test data", function(){
  it("can run tests",function(){
    expect(true).toEqual(true)
  });
  describe("test data in mks", function(){
    var mksSys
    beforeEach(function() {
      mksSys = new System(solSystem.init)
      for(var i = 0; i <mksSys.bodies.length ; i++){
        mksSys.bodies[i].velocity = Utils.arrayScale(mksSys.bodies[i].velocity, 1/86400)
      };
    });

    it("has less kinetic energy than potential energy, is bound",function(){
      var PE = mksSys.potentialEnergy()*testModule.conversions.gravity
      var KE = mksSys.kineticEnergy()
      expect(PE).toBeGreaterThan(KE)
    })
    it("the planets almost satisfy the virial theorem of having twice as much potential energy as kinetic energy",function(){
      // KE
      var ratios = []
      for(var i = 0; i <mksSys.bodies.length ; i++){
        var ke = mksSys.bodies[i].kineticEnergy()
        var pe = mksSys.bodies[i].potentialEnergy()*testModule.conversions.gravity
        ratios.push(ke/pe)
      };
      var sum = 0
      for(var i = 0; i <ratios.length;i++){
        sum += ratios[i]
      };
      expect(sum/(ratios.length-1)).toBeCloseTo(.5, 2)
    })
  })
  describe("test data in Plmt", function(){
    var PmltSys
    beforeEach(function() {
      PmltSys = new System(testModule.convert(solSystem.init))
    });
    it("has less kinetic energy than potential energy, is bound overall",function(){
      expect(PmltSys.potentialEnergy()).toBeGreaterThan(PmltSys.kineticEnergy())
    })
    it("the planets almost satisfy the virial theorem of having twice as much potential energy as kinetic energy",function(){
      var ratios = []
      for(var i = 0; i <PmltSys.bodies.length ; i++){
        var ke = PmltSys.bodies[i].kineticEnergy()
        var pe = PmltSys.bodies[i].potentialEnergy()
        ratios.push(ke/pe)
      };
      var sum = 0
      for(var i = 0; i <ratios.length;i++){
        sum += ratios[i]
      };
      console.log(ratios)
      expect(sum/(ratios.length-1)).toBeCloseTo(.5, 2)
    })
    it("has matching ratios with respect to mks data.",function(){
      var mksSys = new System(solSystem.init)
      for(var i = 0; i <mksSys.bodies.length ; i++){
        mksSys.bodies[i].velocity = Utils.arrayScale(mksSys.bodies[i].velocity, 1/86400)
      };
      var ratios = []
      for(var i = 0; i <PmltSys.bodies.length ; i++){
        var ke = PmltSys.bodies[i].kineticEnergy()
        var pe = PmltSys.bodies[i].potentialEnergy()
        ratios.push(ke/pe)
      };
      var MKSratios = []
      for(var i = 0; i <mksSys.bodies.length ; i++){
        var ke = mksSys.bodies[i].kineticEnergy()
        var pe = mksSys.bodies[i].potentialEnergy()*testModule.conversions.gravity
        MKSratios.push(ke/pe)
      };
      for(var i = 0; i <ratios.length;i++){
        expect(ratios[i]).toBeCloseTo(MKSratios[i],3)
      };
    })

  })
})
/*
    it("",function(){

    })
*/
