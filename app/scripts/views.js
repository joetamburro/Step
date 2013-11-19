console.log('hello views script')

TrackView = Backbone.View.extend({

  template: _.template( $('#track-view-template').text() ),

  events: {
    "click .add-step" : "addStep",
  },

  initialize: function() {
    $('.track-box').append(this.el);
    this.render();
  },

  render: function () {
    this.$el.append( this.template({item: this.model }) )
  },

  addStep: function(){
    new StepView();
  },
  
}),

StepView = Backbone.View.extend ({

  template: _.template( $('#step-view-template').text() ), 

  className: 'step-item',

  events: {
    "click .delete-step" : "deleteStep",
  },

  initialize: function() {
    $('.track-box').append(this.el);
    this.render();
  },

  render: function() {
    this.$el.append( this.template({item: this.model }) )

  },


  deleteStep: function () {
    this.remove()
  },


})