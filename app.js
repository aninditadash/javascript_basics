const { fetchAllUsers } = require("./axios_rest_api");

const initApp = () => {
  // Initializes the app
  console.log("JavaScript Basics");
  fetchAllUsers();
};

// Start the app!
initApp();
