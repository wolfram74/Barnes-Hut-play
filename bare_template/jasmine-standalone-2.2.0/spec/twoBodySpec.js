describe("Two body system tests", function() {

  var bod1
  var bod2
  var virtual

  beforeEach(function() {
    bod1 = new Body({
      position:[1000,0,0],
      velocity:[0,.1,0],
      mass: 10
    })
    bod2 = new Body({
      position:[0,0,0],
      velocity:[0,0,0],
      mass: 100
    })
    virtual = twoBodyUtils.makeReduced(bod1, bod2)
  });

  it("should be able to run tests", function() {
    expect(true).toEqual(true);
  });

  it('should calculate the proper reduced mass', function(){
    expect(virtual.mass).toBeCloseTo(9.0909, 3)
  })
});
