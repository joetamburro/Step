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
    "click  .save-steps"     : "saveSteps",

  },

  initialize: function() {
    $('.track-box').append(this.el);
    this.render();
  },

  render: function () {
    this.$el.append( this.template({item: this.model }) )
  },

  addStep: function(){
    // creates new step view to add another step
    new StepView();
  },

  saveSteps: function () {

    var stepTitles = []
    $('.step-title').each(function(){
            stepTitles.push($(this).val())
    });
    console.log(stepTitles)

    var stepActions = []
    $('.action').each(function(){
        stepActions.push($(this).val())
    });
    console.log(stepActions) 
      
    var trackarray = _.zip(stepTitles,stepActions)
    console.log(trackarray)

    var track = _.object(trackarray)
    console.log(track)
    


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
    $('.track-box').append(this.el);
    this.render();
  },

  render: function () {
    this.$el.append( this.template({item: this.model }) );
  },


})