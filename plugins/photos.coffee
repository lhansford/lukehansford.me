
module.exports = (env, callback) ->
  defaults =
    template: 'photos.hbs' # template that renders pages
    photos: 'photos' # directory containing contents to paginate
    first: 'photos.html' # filename/url for first page
    filename: 'photos-index/%d/index.html' # filename for rest of pages

  # assign defaults any option not set in the config file
  options = {}
  for key, value of defaults
    options[key] ?= defaults[key]

  getPhotos = (contents) ->
    # helper that returns a list of projects found in *contents*
    # note that each project is assumed to have its own directory in the projects directory
    photos = contents[options.photos]._.directories.map (item) -> item.index
    # skip projects that does not have a template associated
    photos = photos.filter (item) -> item.template isnt 'none'
    # sort projects by date
    photos.sort (a, b) -> b.date - a.date
    return photos

  class PhotosPage extends env.plugins.Page
    constructor: (@photos, a) ->

    getFilename: ->
      options.first

    getView: -> (env, locals, contents, templates, callback) ->
      # simple view to pass articles and pagenum to the paginator template
      # note that this function returns a funciton

      # get the pagination template
      template = templates[options.template]
      if not template?
        return callback new Error "unknown paginator template '#{ options.template }'"

      # setup the template context
      ctx = {@photos, page: {title: "Photos"}}
      # extend the template context with the enviroment locals
      env.utils.extend ctx, locals
      # finally render the template
      template.render ctx, callback

  # register a generator, 'paginator' here is the content group generated content will belong to
  # i.e. contents._.paginator
  env.registerGenerator 'photos', (contents, callback) ->

    # find all articles
    photos = getPhotos contents

    # populate pages
    pages = [new PhotosPage(photos)]

    # create the object that will be merged with the content tree (contents)
    # do _not_ modify the tree directly inside a generator, consider it read-only
    rv = {photos: pages}
    # callback with the generated contents
    callback null, rv

  # add the article helper to the environment so we can use it later
  env.helpers.getPhotos = getPhotos

  # tell the plugin manager we are done
  callback()
