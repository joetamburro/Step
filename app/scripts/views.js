console.log('hello views script')

TrackView = Backbone.View.extend ({

  template: _.template( $('#track-view-template').text() ), 

  events: {
    "click .add-step" : "addStep",
  },

  initialize: function() {
    $('.track-box').append(this.el);
    this.render();
  },

  render: function() {
    this.$el.append( this.template({item: this.model }) )

  },

  addStep: function(){
    $('.add-step').remove()
    new TrackView();

  },


})