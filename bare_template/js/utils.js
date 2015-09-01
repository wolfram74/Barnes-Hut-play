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
  }
  return API
})()