const getWeatherFor = city => {
  return new Promise((resolve, reject) => {
    if (city.toLowerCase() === 'sydney') {
      resolve(25);
    } else if (city.toLowerCase() === 'melbourne') {
      resolve(15);
    } else {
      reject(`City ${city} does not exist in our database`);
    }
  });
}