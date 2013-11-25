console.log('hello views script')

// LoginView = Backbone.View.Extend({

  // template: _.template( $('#login-view-template').text() ),

  // events: {

  // },

  // // initialize: function () {

  // // },

  // // render: function () {

  // // },

// }),


CreateTrackView = Backbone.View.extend({

  template: _.template( $('#create-track-view-template').text() ),

  events: {
    "click  .add-step"       : "addStep",
    "click  .tracks-button"  : "yourTracks",
  },

  initialize: function() {
    // $('.track-box').html('');

    $('.add-holder').append(this.el);
    this.render();
  },

  render: function () {
    this.$el.append( this.template({item: this.model }) )
  },

  addStep: function(){
    // $('.track-box').html('');
    
    new StepView();
  },

  yourTracks: function () {
    // on click links to router for '#/yourtracks' and creates new YourTracksView
    window.location.href = '#/yourtracks'
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

  saveSteps: function () {
    // var stepCollection = new StepsCollection()
    // var 
  },

}),

YourTracksView = Backbone.View.extend({

  template: _.template( $('#your-tracks-template').text() ), 

  initialize: function () {
    // $('.track-box').html('');
    $('.container').append(this.el);
    this.render();
  },

  render: function () {
    this.$el.append( this.template({item: this.model }) );
  },




})