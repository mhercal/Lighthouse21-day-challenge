const PI = 3.14159 

const sphereVolume = function (radius) {
  
  r = Math.pow(radius, 3);
  return  (v = (4/3) * PI * r);
  

};

const coneVolume = function (radius, height) {
   
   r = Math.pow(radius, 2);
   return  (v = (1/3) * PI * r * height);
  
  
};

const prismVolume = function (height, width, depth) {
    
    return (height * width * depth);
};

const totalVolume = function (solids) {
   total = 0;
 
  for (var part of solids) {
    switch (part.type) {
      case "sphere":
        total += sphereVolume(part.radius);
        break;
      case "cone":
        total += coneVolume(part.radius, part.height);
        break;
      case "prism":
        total += prismVolume(part.height, part.width, part.depth);
        break;
    }
  }
  return total;

};
