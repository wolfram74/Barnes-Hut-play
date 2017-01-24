describe("Two body system tests", function() {

  var bod1
  var bod2
  var virtual
  var center

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
    center = twoBodyUtils.makeCenter(bod1, bod2)
  });

  it("should be able to run tests", function() {
    expect(true).toEqual(true);
  });
  describe('twoBodyUtils', function(){
    it('should calculate the reduced mass', function(){
      expect(virtual.mass).toBeCloseTo(9.0909, 3)
    })
    it('should calculate the center of mass', function(){
      expect(center.mass).toBeCloseTo(110, 3)
      expect(Utils.arrayMag(center.position)).toBeCloseTo(90.909, 3)
    })
    describe('#makeRandomBody', function(){
      it('should produce a random body in 2 dimensions',function(){
        expect(twoBodyUtils.makeRandomBody().constructor.name).toEqual('Body')
        expect(twoBodyUtils.makeRandomBody().position.length).toEqual(2)
      })
      it('should allow specifying ranges',function(){
        var bodies = [];
        var theoryM = 1000;
        var theoryR = 1000000;
        var theoryV = 500;
        var maxM;
        var maxR;
        var maxV;
        for(var loops=0; loops <200; loops++){
          bodies.push(twoBodyUtils.makeRandomBody(
            theoryM, theoryR, theoryV
            ))
          if(bodies.mass > maxM){maxM = bodies.mass};
          if(Utils.arrayMag(bodies.position) > maxR){
            maxR = Utils.arrayMag(bodies.position)
          };
          if(Utils.arrayMag(bodies.velocity) > maxV){
            maxV = Utils.arrayMag(bodies.velocity)
          };
        }
        expect(bodies.list).toEqual(200);
        expect(maxM).toBeGreaterThan(theoryM*0.9);
        expect(maxM).toBeLessThan(theoryM*1.1);
        expect(maxR).toBeGreaterThan(theoryR*0.9);
        expect(maxR).toBeLessThan(theoryR*1.1);
        expect(maxV).toBeGreaterThan(theoryV*0.9);
        expect(maxV).toBeLessThan(theoryV*1.1);

      })
    })
  })
});
