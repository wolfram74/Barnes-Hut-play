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
});
