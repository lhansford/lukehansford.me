const Handlebars = require('handlebars');

module.exports = function(tags) {
  var tags = tags ? tags.split(',') : [];
  tagElements = [];
  for (var i = 0; i < tags.length; i++) {
    tagElements.push('<span>#' + tags[i] + '</span>');
  };
  return new Handlebars.SafeString(tagElements.join(''));
}