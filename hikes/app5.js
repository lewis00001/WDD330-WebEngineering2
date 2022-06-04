import Hikes from './hikes.js';
import Comments from './comments.js';
//on load grab the array and insert it into the page
const myHikes = new Hikes('hikes');
const comments = new Comments;
window.addEventListener('load', () => {
  myHikes.showHikeList();
});
