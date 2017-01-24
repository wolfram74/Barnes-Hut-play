describe("Utils (utilities)",function(){
  describe("#arrayMag", function(){
    it("can return magnitudes of arrays", function(){
      var arr1 = [3,4,0] // 5
      var arr2 = [10,0,0] // 10
      var arr3 = [3,4,7] // 8.60232527
      var arr4 = [1,1,1]  // 1.73205080757
      expect(Utils.arrayMag(arr1) ).toBeCloseTo(5, 6)
      expect(Utils.arrayMag(arr2) ).toBeCloseTo(10, 6)
      expect(Utils.arrayMag(arr3) ).toBeCloseTo(8.60232527, 6)
      expect(Utils.arrayMag(arr4) ).toBeCloseTo(1.73205080757, 6)
    })
  })
})
