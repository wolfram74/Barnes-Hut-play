console.log("test data loaded")
var solSystem = {
  init:{
    sun:{
      position:
        [-462274766.49029809, 571307291.68997252, 259952673.70668754],
      velocity:
        [-832399.52725117235, -359904.59311214706, -136289.26806038216],
      mass:1.989 * Math.pow(10,30)
    },
    jupiter:{
      position:
        [150463191582.29327, -698747623859.14197, -303765476502.69525],
      velocity:
        [1096142600.9707019, 258392456.7204127, 83629952.169289619],
      mass:1.89813 * Math.pow(10,27)
    },
    saturn:{
      position:
        [535381533667.97748, 1153273114079.2976, 451913100610.75629],
      velocity:
        [-813926006.15787542, 296504989.32141125, 155776788.5785526],
      mass:5.683 * Math.pow(10,26)
    },
    neptune:{
      position:
        [717753278126.50806, -4125218139604.8169, -1706314193560.4861],
      velocity:
        [460565514.71125382, 75470352.788929477, 19454844.053292509],
      mass:1.024  * Math.pow(10,26)
    },
    uranus:{
      position:
        [2945899420544.2007, -500027026421.94879, -261658146962.66748],
      velocity:
        [106046546.76548657, 506094592.87914395, 220279353.36466765],
      mass:8.681 * Math.pow(10,25)
    },
    earth:{
      position:
        [-73431034042.743881, 117729686107.88492, 51364658220.736267],
      velocity:
        [-2279889885.6685352, -1175882615.763654, -513170457.37725317],
      mass:5.972 * Math.pow(10,24)
    },
    venus:{
      position:
        [99163408708.532166, 41702102850.061295, 12254199141.689671],
      velocity:
        [-1199613386.6557312, 2500398459.4571061, 1193231355.5087409],
      mass:4.867 * Math.pow(10,24)
    },
    mars:{
      position:
        [-138634489082.67218, 184242484647.90073, 88467112029.21019],
      velocity:
        [-1640853257.1749768, -932518244.58612406, -379054585.68680972],
      mass:6.39 * Math.pow(10,23)
    },
    mercury:{
      position:
        [15490754832.349974, -56829276620.384377, -32003291218.696342],
      velocity:
        [3250060113.9021993, 1215489590.0190678, 300904131.13978839],
      mass:3.285000*Math.pow(10,23)
    },
    moon:{
      position:
        [-73435363360.690002, 117727798244.4649, 51363957396.694878],
      velocity:
        [-2279512146.104465, -1176737467.4844868, -513638208.75329912],
      mass:7.3478 * Math.pow(10,22)
    },
    pluto:{
      position:
        [-2859695396961.9473, -3386341044964.5527, -194166131705.2587],
      velocity:
        [373262671.84544933, -309981038.39164954, -208985503.50802159],
      mass:1.309 * Math.pow(10,22)
    }
  },
  finish:{
    sun:{
      position:
        [-1068001209.5397506, -395483337.95663589, -137844399.29973322],
      velocity:
        [803978.06302693649, -1011572.8654041241, -453934.78138246929],
      mass:1.989 * Math.pow(10,30)
    },
    jupiter:{
      position:
        [597841064494.40039, 408550846607.99744, 160559575221.29688],
      velocity:
        [-681881980.99017644, 879337428.47351885, 393527476.93948424],
      mass:1.89813 * Math.pow(10,27)
    },
    saturn:{
      position:
        [957638511015.6709, 923056150676.86694, 340040454726.36334],
      velocity:
        [-641138143.14533055, 526999126.99409342, 245241071.14129886],
      mass:5.683 * Math.pow(10,26)
    },
    neptune:{
      position:
        [2513786845168.8325, -3438295752162.0132, -1469897160180.8733],
      velocity:
        [386672372.59714127, 248562907.46070752, 92111742.332174405],
      mass:1.024  * Math.pow(10,26)
    },
    uranus:{
      position:
        [2157707135144.8479, -1871489459447.5054, -850183227768.08911],
      velocity:
        [401483802.669985, 367264708.78038913, 155173493.74455097],
      mass:8.681 * Math.pow(10,25)
    },
    earth:{
      position:
        [-26278930318.75415, 132573528703.7394, 57510604691.172493],
      velocity:
        [-2577357620.8544822, -413825188.78231704, -179424720.53546849],
      mass:5.972 * Math.pow(10,24)
    },
    venus:{
      position:
        [-108573551410.0153, -5934203171.7609615, 4174004887.0313988],
      velocity:
        [77627391.318040907, -2769818889.545639, -1250964415.8409147],
      mass:4.867 * Math.pow(10,24)
    },
    mars:{
      position:
        [206927053777.93634, -1219136790.8267453, -6139500842.8033237],
      velocity:
        [112692276.03122179, 2065521699.0900154, 944373424.96614063],
      mass:6.39 * Math.pow(10,23)
    },
    mercury:{
      position:
        [-22120621924.776695, -59933167369.947952, -29757145022.029949],
      velocity:
        [3167622056.5903659, -825107362.89772534, -769097536.35609722],
      mass:3.285000*Math.pow(10,23)
    },
    moon:{
      position:
        [-26282789955.248379, 132570655521.08411, 57509843137.618782],
      velocity:
        [-2576768900.6675277, -414594984.89120698, -179760343.76380327],
      mass:7.3478 * Math.pow(10,22)
    },
    pluto:{
      position:
        [-1478624901619.2373, -4185887838194.4893, -860782286831.90759],
      velocity:
        [453891422.36238778, -169717724.56599376, -189718761.84706995],
      mass:1.309 * Math.pow(10,22)
    }
  }
}

testModule = (function(){
  var API = {}
  var conversions = {
    mass: 2.51369966316425* Math.pow(10 , -17),
    length: 6.68458712226845* Math.pow(10 , -6),
    time: 421956.122865024,
    gravity: 6.67384 * Math.pow(10, -11)
  };
  conversions.speed = conversions.length/conversions.time
  API.conversions = conversions

  API.convert = function(system){
    var output = {}
    for(var body in system){
      output[body] = {};
      output[body]["mass"] = system[body].mass*API.conversions.gravity;
      var tempV = Utils.arrayScale(system[body].velocity, 1/86400);
      output[body]["velocity"] = tempV//Utils.arrayScale(tempV, API.conversions.speed);
      output[body]["position"] = system[body].position//Utils.arrayScale(system[body].position,API.conversions.length);
    };
    return output;
  }
  return API
})()

