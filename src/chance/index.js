const coin = new Coin();

const headsOrTails = () => {
  if (coin.flip()) {
    return 'heads';
  } else {
    return 'tails';
  }
};