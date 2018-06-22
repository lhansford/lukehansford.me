
module.exports = (env, callback) ->
  defaults =
    template: 'projects.hbs' # template that renders pages
    projects: 'projects' # directory containing contents to paginate
    first: 'projects.html' # filename/url for first page
    filename: 'projects-index/%d/index.html' # filename for rest of pages

  # assign defaults any option not set in the config file
  options = {}
  for key, value of defaults
    options[key] ?= defaults[key]

  getProjects = (contents) ->
    # helper that returns a list of projects found in *contents*
    # note that each project is assumed to have its own directory in the projects directory
    projects = contents[options.projects]._.directories.map (item) -> item.index
    # skip projects that does not have a template associated
    projects = projects.filter (item) -> item.template isnt 'none'
    # sort projects by date
    projects.sort (a, b) -> b.date - a.date
    return projects

  class ProjectsPage extends env.plugins.Page
    ### A page has a number and a list of articles ###

    constructor: (@projects, a) ->

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
      ctx = {@projects, page: {title: "Projects"}}
      # extend the template context with the enviroment locals
      env.utils.extend ctx, locals
      # finally render the template
      template.render ctx, callback

  # register a generator, 'paginator' here is the content group generated content will belong to
  # i.e. contents._.paginator
  env.registerGenerator 'projects', (contents, callback) ->

    # find all articles
    projects = getProjects contents

    # populate pages
    pages = [new ProjectsPage(projects)]

    # create the object that will be merged with the content tree (contents)
    # do _not_ modify the tree directly inside a generator, consider it read-only
    rv = {projects: pages}
    # callback with the generated contents
    callback null, rv

  # add the article helper to the environment so we can use it later
  env.helpers.getProjects = getProjects

  # tell the plugin manager we are done
  callback()
