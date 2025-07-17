import Icon from "../images/image_1.jpg";

const create_image = () => {
  const element = document.createElement("div");
  element.innerHTML = "Displaying below image using Webpack";

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);
  return element;
};

const show_image = () => {
  document.body.appendChild(create_image());
};

export default show_image;
