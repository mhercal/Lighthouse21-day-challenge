const busTimes = buses => {
  
  for (var end in buses){
    buses[end]=(buses[end].distance/buses[end].speed)
  }
  return (buses);

}
