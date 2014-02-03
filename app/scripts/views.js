console.log('hello views script')

SignupView = Backbone.View.extend({

  className: 'sign-up',

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
    $('.track-window').html('')
    this.newSteps = [];
    var firstStep = new Step;
    this.newSteps.push(firstStep)
    console.log(this.newSteps)
    $('.track-box').append(this.el);
    this.newTrack = new Track();
    this.render();
  },

  render: function () {
    this.$el.append( this.template({item: this.model }) )
  },

  addStep: function(){
    var addedStep = new Step;
    this.newSteps.push(addedStep)
    // creates new step view to add another step
    new StepView();

  },

  finalizeSaveTrack: function(){
      this.newTrack.save(null, {
        success: function(newTrack) {
          // Execute any logic that should take place after the object is saved.
          // save steps and set 
          alert('Track Save SUccessful!');
          window.location.href = "#/yourtracks"
        },
        error: function(newTrack, error) {
          // Execute any logic that should take place if the save fails.
          // error is a Parse.Error with an error code and description.
          alert('Failed to create new object, with error code: ' + error.description);
        }
      
    });
  },

  saveTrack: function () {

    var trackName = $('.track-name').val();

    // newTrack.set("id", );
    this.newTrack.set("trackName",  trackName);
    // newTrack.set("settings", );
    // newTrack.set("user_id", );

    // amount of steps we have
    var total = this.newSteps.length
    // setting the count to 0
    var count = 0;
    var that = this;
    // looping through all the steps
    if (validateSave()) {
      _.each(this.newSteps, function(step){
        step.save(null, {
          success: function(){
             // adding relation between step and track
            that.newTrack.relation("steps").add(step)
            // adds 1 to the count
            count++;
            
            if (count == total) {
              // now all saves have finished, so we can save the track
              that.finalizeSaveTrack()
            }
          }
        })
      })
    } 
  },
}),


StepView = Backbone.View.extend ({

  template: _.template( $('#step-view-template').text() ), 

  className: 'step-item',

  events: {
    "click  .delete-step"    : "deleteStep",
  },

  initialize: function() {
    $('.track-box').append(this.el);
    this.render();
  },

  render: function() {
    this.$el.append( this.template({item: this.model }) );
    this.$el.find('.action').select2({
      minimumResultsForSearch: -1,
      placeholder: 'Choose an action',
    });
  },

  deleteStep: function () {
    this.remove()
  },

}),

YourTracksView = Backbone.View.extend({

  className: 'yourtracks',

  template: _.template( $('#your-tracks-template').text() ), 

  initialize: function () {
    $('.applicant').html('');
    $('.track-window').append(this.el);
    this.render();
  },

  render: function () {
    this.$el.append( this.template({item: this.model }) );
    // new TrackView();

  },


}),

TrackView = Backbone.View.extend({

  className: 'track',

  template: _.template( $('#your-track-view-template').text() ),
  
  initialize: function () {
    $('.main-view').html('');
    $('.yourtracks').append(this.el);
    this.render();
  },

  render: function () {
    this.$el.append( this.template({item: this.model }) );
  },

});

ApplicantsView = Backbone.View.extend({

   
  className: 'applicant',

  template: _.template( $('#applicants-template').text() ),

  initialize: function () {
    $('.track-window').html('');
    $('.track-window').append(this.el);
    this.render();
  },

  render: function () {
    this.$el.append( this.template({item: this.model }) );
    // $('.fill-view').append('<div class="header-filler"></div>')
  },

  // trackClicked: function(event){
  //   console.log("targetted track:", event.target)
  // }
});


function validateSave (){
  // reset status
  var good = true                                       
  $('.errormessage-left').removeClass('active-left')
  $('input, select').removeClass("warning")
  $('input, select').not('.select2-offscreen, .select2-input').each(function(){
    if ($(this).val() == "") {
      console.log("found an empty");
      good = false
      $(this).addClass("warning")
      $('.errormessage-left').addClass('active-left'),
      $('.modal').addClass('modal-active'); 
    }
  })
  console.log(good)
  return good
}

// modal close button
$('.Button-2').click(function () {
  console.log('done!')
  $('.modal').removeClass('modal-active');
})