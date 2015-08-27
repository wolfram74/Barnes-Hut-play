describe("test data", function(){
  it("can run tests",function(){
    expect(true).toEqual(true)
  });
  describe("test data in mks", function(){
    beforeEach(function() {
      var mksSys = new System(solarSystem.init)
    });

    it("has less kinetic energy than potential energy, is bound",function(){
      expect(mksSys.potentialEnergy*testModule.gravity()).toBeGreater(mksSys.kineticEnergy())
    })
    it("the planets almost satisfy the virial theorem of having twice as much potential energy as kinetic energy",function(){
      // KE
      var ratios = []
      for(var i = 0; i <mksSys.bodies.length ; i++){
        var ke = mksSys.bodies[i].kineticEnergy()
        var pe = mksSys.bodies[i].potentialEnergy()*testModule.conversions.gravity
        ratios.push(ke/pe)
      };
      console.log(ratios)
      var sum = 0
      for(var i = 0; i <ratios.length;i++){
        sum += raios[i]
      };
      expect(sum/ratios.length).toBeGreater(.495)
      expect(sum/ratios.length).not.toBeGreater(.505)
    })
  })
  describe("test data in Plmt", function(){
    beforeEach(function() {
      var PmltSys = new System(testModule.convert(solarSystem.init))
    });
    it("has less kinetic energy than potential energy, is bound overall",function(){
      expect(PmltSys.potentialEnergy*testModule.gravity()).toBeGreater(PmltSys.kineticEnergy())      
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
      expect(sum/ratios.length).toBeGreater(.495)
      expect(sum/ratios.length).not.toBeGreater(.505)
    })
    it("has matching ratios with respect to mks data.",function(){
      var mksSys = new System(solarSystem.init)
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