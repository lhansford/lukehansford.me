const Handlebars = require('handlebars');

module.exports = function(fileName) {
  return fileName.endsWith('.jpg');
}