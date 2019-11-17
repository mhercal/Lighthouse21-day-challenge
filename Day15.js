const finalPosition = (moves) => {
let [x, y] = [0, 0];

for (var move of moves) {
    switch (move) {
      case 'north':
        y++;
        break;
      case 'west':
        x--;
        break;
      case 'south':
        y--;
        break;
      case 'east':
        x++;
        break;
      default:
        return;
    }

  }

  return [x, y];
  }
