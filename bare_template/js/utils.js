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
  return API
})()