const countTickets = (tickets) => {
  
  var count = {
    red: 0,
    green: 0,
    blue: 0
  };
  
  for (var ticket of tickets){
    count[ticket]++;
  }
  return count;

};

const bestOdds = (tickets, raffleEntries) => {
  
let sumOfTickets = countTickets(tickets);
let red = raffleEntries.red / sumOfTickets.red;
let green = raffleEntries.green / sumOfTickets.green;
let blue = raffleEntries.blue / sumOfTickets.blue;
if(red<blue && red<green)
return "You have the best odds of winning the red raffle.";
if(green<red && green<blue)
return "You have the best odds of winning the green raffle.";
if(blue<red && blue<green)
return "You have the best odds of winning the blue raffle.";

};

