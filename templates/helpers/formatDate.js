module.exports = function() {
  return moment.utc(this.date).format('MMM DD, YYYY');
}