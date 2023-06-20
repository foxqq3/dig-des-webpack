function createElement(tag, options) {
  let elem = document.createElement(tag);
  Object.keys(options).forEach((key) => {
    elem[key] = options[key];
  });
  return elem;
}

export default createElement;
