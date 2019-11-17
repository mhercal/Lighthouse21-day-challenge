const dynamicPricing = (numberOfPeople, distanceTraveled) => {

  var ticketCost = 1 + (distanceTraveled*0.25);
  if (numberOfPeople >= 30) ticketCost = ticketCost + 0.25;
  console.log (ticketCost);
  
   return "$" + ticketCost.toFixed(2);
}
