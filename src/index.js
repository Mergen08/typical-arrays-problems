const isArrValid = (array) => {
  if (array === undefined) return false;
  if (array.length === 0) return false;
  return true;
}
exports.min = function min (array) {
  if (isArrValid(array)) return Math.min(...array);
  return 0;
}

exports.max = function max (array) {
  if (isArrValid(array)) return Math.max(...array);
  return 0;
}
exports.avg = function avg (array) {
  if (isArrValid(array)) return array.reduce((sum, num) => {
    sum += num;
    return sum;
  }, 0) / array.length;
  return 0;
}
