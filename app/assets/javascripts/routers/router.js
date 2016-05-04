AsanaClone.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.workspaces = options.workspaces;
  },

  routes: {
    "": "index",
    "workspaces/new": "new",
    "workspaces/:id": "show"
  },

  index: function () {
    this.workspaces.fetch();
    var indexView = new AsanaClone.Views.WorkspacesIndex({
      collection: this.workspaces
    });

    this._swapView(indexView);
  },

  show: function (id) {
    var workspace = this.workspaces.getOrFetch(id)

    var showView = new AsanaClone.Views.WorkspaceShow({
      model: workspace
    });

    this._swapView(showView);
  },

  new: function () {
    var newWorkspace = new AsanaClone.Models.Workspace();

    var newView = new AsanaClone.Views.WorkspaceForm({
      model: newWorkspace,
      collection: this.workspaces
    });

    this._swapView(newView)
  },

  _swapView: function (view){
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
})