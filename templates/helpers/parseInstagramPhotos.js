module.exports = function (context) {
  return this.page.metadata.images.split(",").map(src => context.fn(src));
};
