Utils = (function(){
  var API = {}
  API.arrayMag = function(array){
    var lenSquared = 0
    for(var i=0; i < array.length; i++){
      lenSquared += (array[i]*array[i])
    };
    return Math.pow(lenSquared,0.5)
  };

  API.arrayScale = function(array, mult){
    var out = []
    for(var i=0; i < array.length; i++){
      out.push(array[i]*mult)
    };
    return out    
  };

  API.arrayAdd = function(array1, array2){
    var out = []
    for(var i=0; i < array1.length; i++){
      out.push(array1[i]+array2[i])
    };
    return out
  };

  API.arrayDif = function(array1, array2){
    var out = []
    for(var i=0; i < array1.length; i++){
      out.push(array1[i]-array2[i])
    };
    return out    
  };

  API.arrayCompare = function(array1, array2){
    var sepVec = API.arrayDif(array1, array2)
    var arrMag = API.arrayMag(array2)
    return API.arrayMag(sepVec)/arrMag
  };

  API.clone = function(obj) {
    var copy; // can handle plain Objects, Arrays, Dates, Strings, Numbers, or Booleans comprised of the previous 6 types.
    // copied from top answer to http://stackoverflow.com/questions/728360/most-elegant-way-to-clone-a-javascript-object
    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
      copy = new Date();
      copy.setTime(obj.getTime());
      return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
      copy = [];
      for (var i = 0, len = obj.length; i < len; i++) {
        copy[i] = this.clone(obj[i]);
      }
      return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
      copy = {};
      for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = this.clone(obj[attr]);
      }
      return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
  };
 
  return API
})()