//Solution 1:

const registerToVote = (name, unregisteredVoters) => {

  let mailingList = [];
 
  for (let i in unregisteredVoters) {
    if (name != unregisteredVoters[i])   mailingList.push(unregisteredVoters[i]);
    
 }
  
   return mailingList;
 
}
