function checkout(array) {
    if (!array || !array.length) {
        return false;
    }
    return true;
}
exports.min = function min(array) {
    if (!checkout(array)) return 0;
    else return Math.min.apply(null, array);
};
exports.max = function max(array) {
    if (!checkout(array)) return 0;
    else return Math.max.apply(null, array);
};
exports.avg = function avg(array) {
    if (!checkout(array)) return 0;
    else return array.reduce((a, b) => a + b) / array.length;
};
