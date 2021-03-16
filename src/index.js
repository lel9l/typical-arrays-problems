
exports.min = function min (array) {
  return  typeof array === 'undefined' || array.length === 0  ? 0 :Math.min.apply(null, array);
}

exports.max = function max (array) {
   return typeof array === 'undefined' || array.length === 0 ? 0 :Math.max.apply(null, array);
}

exports.avg = function avg (array) {
  return typeof array === 'undefined' || array.length === 0  ? 0 : array.reduce((a, b) => (a + b)) / array.length;
}
