const termTopics = (interviews) => {
 
 let counter = [0,0,0];
 for (var i = 0; i < interviews.length; i++){
   switch (interviews[i]){
     case 'smart city':
       counter[0]++;
       break;
     case 'arts funding':
       counter[1]++;
       break;
     case 'transportation':
       counter[2]++;
       break;
       
   }  
 }
  return counter;
}
