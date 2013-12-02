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
    "click  .save-track"     : "saveTrack",
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

  saveTrack: function () {

    var newTrack = new Track();
    var trackName = $('.track-name').val();

    // newTrack.set("id", );
    newTrack.set("name",  trackName);
    // newTrack.set("settings", );
    // newTrack.set("user_id", );
     
    newTrack.save(null, {
      success: function(newTrack) {
        // Execute any logic that should take place after the object is saved.
        alert('New object created with objectId: ' + newTrack.id);
      },
      error: function(newTrack, error) {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and description.
        alert('Failed to create new object, with error code: ' + error.description);
      }
    });


    // var steps = new StepsCollection("Step");
    // this.model.set({
    //   // "step-number": this.$el.find('').val(),
    //   "title": this.$el.find('.step-title').val(),
    //   "action": this.$el.find('.action').val()
    // });
    // var testTrack = new Track();
    // var steps = $('.step-item').each(function(){
    //   this.model.set({
    //     "title":  $('.step-title').val(),
    //     "action": $('.action').val()
    //   });
    // });
    // console.log(steps)
  
// }

    // var stepTitles = [];

    // $('.step-title').each(function(){
    //         stepTitles.push($(this).val())
    // });
    // console.log(stepTitles)

    // var stepActions = []
    // $('.action').each(function(){
    //     stepActions.push($(this).val())
    // });
    // console.log(stepActions) 
      
    // var trackarray = _.zip(stepTitles,stepActions)
    // console.log(trackarray)

    // var track = _.object(trackarray)
    // console.log(track)

    // var firstTrack = new Track();


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