const judgeVegetable = (vegetables, metric) => {

let maxMetricVal = 0;
let bestSubmitter='';
 
 for(let vegetable of vegetables){
    if(vegetable[metric] > maxMetricVal){
      maxMetricVal = vegetable[metric];
      bestSubmitter = vegetable['submitter'];
    }
  }
  return bestSubmitter;
};
