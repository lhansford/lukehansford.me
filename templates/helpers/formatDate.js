module.exports = function(date) {
  return moment.utc(date).format('MMM DD, YYYY');
}