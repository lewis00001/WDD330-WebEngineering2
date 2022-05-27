function qSelector(s) {
  let element = document.querySelectorAll(s);
  // verify the element was returned
  if (element) {
    return element;
  } else {
    console.log(`Cannot find element: ${s}`);
  }
}
  
function onTouch(selector, callback) {
  let elements = qSelector(selector);
  // verify elements
  if (elements) {
    elements.forEach((element) => {
      // listen for mobile presses
      element.addEventListener('touchend', callback);
      // listen for browser clicks
      element.addEventListener('click', callback);
    });
  } else {
    console.log(`Error: onTouch elements value = ${elements}`);
  }
}
  
export {
  qSelector,
  onTouch
}