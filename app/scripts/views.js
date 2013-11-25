console.log('hello views script')

SignupView = Backbone.View.extend({

  template: _.template( $('#signup-view-template').text() ),

  events: {
    "click .submit-user"    : "submitUser",
  },

  initialize: function () {
    $('.track-box').append(this.el);
    this.render();
  },

  render: function () {
    this.$el.append( this.template({item: this.model }) )
  },

  submitUser: function () {

    var user = new Parse.User();

    var username = $('.username').val();
    var password = $('.password').val();
    var email = $('.email').val();

    user.set("username", username);
    user.set("password", password);
    user.set("email", email);
     
    user.signUp(null, {
      success: function(user) {
        // Hooray! Let them use the app now.
        window.confirm("Confirm submission")
    window.location.href = '#/createtrack'
      },
      error: function(user, error) {
        // Show the error message somewhere and let the user try again.
        alert("Error: " + error.code + " " + error.message);
      }
    });

  },

}),


CreateTrackView = Backbone.View.extend({

  template: _.template( $('#create-track-view-template').text() ),

  className: "step-buttons",

  events: {
    "click  .add-step"       : "addStep",
    "click  .tracks-button"  : "yourTracks",
  },

  initialize: function() {
    // $('.track-box').html('');

    $('.track-box').append(this.el);
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
    $('.track-box').append(this.el);
    this.render();
  },

  render: function () {
    this.$el.append( this.template({item: this.model }) );
  },


})