const checkAir = function (samples, threshold) {

let dirtyAir = 0;
  
  for(var i in samples){
    if(samples[i] === 'dirty') dirtyAir ++;
     }
       
    if ((dirtyAir / samples.length) < threshold){
      return "Clean";
    } 
    else {
      
      return "Polluted";
    }
    
  
}
