// Creating a Promise
const timerFunc = (data) => {
  return new Promise((resolve, reject) => {
    const success = true;

    setTimeout(() => {
      if (success) {
        resolve(data); // If successful, resolve the promise with a value
      } else {
        reject("Error: Failed to fetch data."); // If an error occurs, reject the promise with a reason
      }
    }, 2000);
  });
};

const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

const wrongURLFetchPromise = fetch(
  "https://mdn.github.io/learning-area1/javascript/apis/fetching-data/can-store/products.json"
);

// Promise chaining
fetchPromise
  .then((response) => {
    console.log(`Received response: ${response.status}`);
    return response.json();
  })
  .then((data) => {
    console.log(data);
    return timerFunc(data);
  })
  .then((data) => {
    console.log("Timer function called: ", data);
  })
  .catch((error) => {
    console.error(`Could not get products: ${error}`);
  });

// Promise chaining
wrongURLFetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    console.log(`Received response: ${response.status}`);
    return response.json();
  })
  .then((data) => {
    console.log(data);
    return timerFunc(data);
  })
  .then((data) => {
    console.log("Timer function called: ", data);
  })
  .catch((error) => {
    console.error(`Could not get products: ${error}`);
  });

console.log("Initiating promise call...");
