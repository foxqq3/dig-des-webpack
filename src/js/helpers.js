function createElement(tag, options) {
  if (typeof options !== 'object') {
    options = {};
  }

  let elem = document.createElement(tag);
  Object.keys(options).forEach((key) => {
    elem[key] = options[key];
  });
  return elem;
}

export default createElement;

// function createElement(tag, options, children = []) {
//   if( Array.isArray(options)) {
//     children = options;
//     options = {};
//   }

//   if( typeof options !== 'object') {
//     options = {};
//   }

//   let elem = document.createElement(tag);
//   Object.keys(options).forEach((key) => {
//     elem[key] = options[key];
//   });

//   children.forEach((child) => {
//     elem.appendChild(child);
//   });

//   return elem;
// }

// export default createElement;
