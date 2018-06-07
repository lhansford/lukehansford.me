module.exports = function(date) {
  return 'Photo from ' + moment.utc(date).format('MMM DD, YYYY');
}