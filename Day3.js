const castVote = (name, votes) => {

  if (name == 'Tim') votes[0]++;
  else if (name == 'Sally') votes[1]++;
  else if (name == 'Beth') votes[2]++;
  
  return votes;
  
}
