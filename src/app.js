import show_image from './functions_and_operators/show_images';
import {
  fetchAllPosts,
  fetchPostByUserID,
} from './promises_async_await/fetch_api';
import {
  correctURLPromise,
  incorrectURLPromise,
} from './promises_async_await/promises';
import './styles/styles.scss';
import upperCase from 'lodash/upperCase';
import './functions_and_operators/iterators_generators';

const initApp = () => {
  // Initializes the app
  console.log(upperCase('JavaScript Basics'));
  show_image();
  fetchAllPosts();
  fetchPostByUserID(1);
  correctURLPromise();
  incorrectURLPromise();
};

// Start the app!
initApp();
