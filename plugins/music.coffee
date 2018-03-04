
module.exports = (env, callback) ->
  defaults =
    template: 'music.hbs' # template that renders pages
    # projects: 'projects' # directory containing contents to paginate
    first: 'music.html' # filename/url for first page
    # filename: 'page/%d/index.html' # filename for rest of pages

  # assign defaults any option not set in the config file
  options = {}
  for key, value of defaults
    options[key] ?= defaults[key]

  # getProjects = (contents) ->
  #   # helper that returns a list of projects found in *contents*
  #   # note that each project is assumed to have its own directory in the projects directory
  #   projects = contents[options.projects]._.directories.map (item) -> item.index
  #   # skip projects that does not have a template associated
  #   projects = projects.filter (item) -> item.template isnt 'none'
  #   # sort projects by date
  #   projects.sort (a, b) -> b.date - a.date
  #   return projects

  class MusicPage extends env.plugins.Page
    constructor: () -> super '', {template: 'music.hbs'}
    # getFilename: -> 'templates/index.html'

  callback()
