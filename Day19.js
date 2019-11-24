const pumpkinSpice = money => {
  var [slice, latte, mac, grams] = [0, 0, 0, 0];
  slice = Math.floor(money / 5);
  rest = money % 5;
  latte = Math.floor(rest / 3);
  rest1 = rest % 3;
  mac = rest1;
  grams = (slice * 30) + (latte * 15) + (mac * 3);
  return [slice, latte, mac, grams];
};
