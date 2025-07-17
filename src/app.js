import show_image from "./show_images";
import "./styles/styles.scss";
import _ from "lodash";

const initApp = () => {
  // Initializes the app
  console.log(_.upperCase("JavaScript Basics"));
  show_image();
};

// Start the app!
initApp();
