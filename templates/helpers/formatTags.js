const Handlebars = require('handlebars');

module.exports = function(tags) {
  var tags = tags ? tags.split(',') : [];
  var tagElements = tags.map(t => `<span>#${t}</span>`);
  return new Handlebars.SafeString(tagElements.join(''));
}