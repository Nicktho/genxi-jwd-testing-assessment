const canBuyBeer = (age) => {
  if (age > 17) {
    return true;
  } else {
    return false;
  }
};

const greg = new Person();

const canGregBuyBeer = () => {
  if (canBuyBeer(greg.age)) {
    return `Greg is ${greg.age}, he can buy beer!`;
  } else {
    return `Greg is ${greg.age}, he can't buy beer :(`;
  }
};