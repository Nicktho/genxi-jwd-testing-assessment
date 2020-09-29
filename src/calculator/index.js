const checkIfNumber = x => {
  if (typeof x !== 'number') {
    throw new Error(`${x} is not a number`);
  }
};

class Calculator {
  add(x, y) {
    checkIfNumber(x);
    checkIfNumber(y);

    return x + y;
  }

  subtract(x, y) {
    checkIfNumber(x);
    checkIfNumber(y);

    return x - y;
  }

  multiply(x, y) {
    checkIfNumber(x);
    checkIfNumber(y);

    return x * y;
  }

  divide(x, y) {
    checkIfNumber(x);
    checkIfNumber(y);

    if (y === 0) {
      throw new Error('Can not divide by zero.');
    }

    return x / y;
  }
}