//svg
const requireAll = (r) => r.keys().forEach(r);
const requireContext = require.context('@/assets/icons/', true, /\.svg$/);
requireAll(requireContext);

//debounce
export function debounce(fn, delay) {
  var timeoutID = null;
  return function () {
    clearTimeout(timeoutID);
    var args = arguments;
    var that = this;
    timeoutID = setTimeout(function () {
      fn.apply(that, args);
    }, delay);
  };
}
