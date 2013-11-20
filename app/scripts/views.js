console.log('hello views script')

CreateTrackView = Backbone.View.extend({

  template: _.template( $('#create-track-view-template').text() ),

  events: {
    "click  .add-step"  : "addStep",
    "click    .tracks-button"  : "yourTracks",
  },

  initialize: function() {
    $('.add-holder').append(this.el);
    this.render();
  },

  render: function () {
    this.$el.append( this.template({item: this.model }) )
  },

  addStep: function(){
    new StepView();
  },

  yourTracks: function () {
    new YourTracksView();
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

}),

YourTracksView = Backbone.View.extend({

  template: _.template( $('#your-tracks-template').text() ), 

  initialize: function () {
    $('.track-box').hide();
    $('.container').append(this.el);
    this.render();
  },

  render: function () {
    // this.$el.attr('href', '#/yourtracks');
    this.$el.append( this.template({item: this.model }) );
  },




})