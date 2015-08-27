describe("test data", function(){
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
        console.log(ke)
        var pe = mksSys.bodies[i].potentialEnergy()*testModule.conversions.gravity
        console.log(pe)
        ratios.push(ke/pe)
      };
      console.log(ratios)
      var sum = 0
      for(var i = 0; i <ratios.length;i++){
        sum += ratios[i]
      };
      expect(sum/ratios.length).toBeCloseTo(.5, 3)
    })
  })
  describe("test data in Plmt", function(){
    beforeEach(function() {
      var PmltSys = new System(testModule.convert(solSystem.init))
    });
    it("has less kinetic energy than potential energy, is bound overall",function(){
      expect(PmltSys.potentialEnergy*testModule.gravity()).toBeGreaterThan(PmltSys.kineticEnergy())      
    })
    it("the planets almost satisfy the virial theorem of having twice as much potential energy as kinetic energy",function(){
      var ratios = []
      for(var i = 0; i <PmltSys.bodies.length ; i++){
        var ke = PmltSys.bodies[i].kineticEnergy()
        var pe = PmltSys.bodies[i].potentialEnergy()
        ratios.push(ke/pe)
      };
      console.log(ratios)
      var sum = 0
      for(var i = 0; i <ratios.length;i++){
        sum += raios[i]
      };
      expect(sum/ratios.length).toBeGreaterThan(.495)
      expect(sum/ratios.length).not.toBeGreaterThan(.505)
    })
    it("has matching ratios with respect to mks data.",function(){
      var mksSys = new System(solSystem.init)
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
      console.log(ratios)
      console.log(MKSratios)
      for(var i = 0; i <ratios.length;i++){
        expect(ratios[i]).toEqual(MKSratios[i])
      };
    })

  })
})
/*
    it("",function(){
      
    })
*/