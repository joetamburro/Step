console.log('hello views script')

var stepCount = 0;
console.log(stepCount);

HomeView = Backbone.View.extend({

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
    console.log(stepCount);
    firstStep.number = 1;
    console.log('the initial step number is ' + firstStep.number)
    stepCount = firstStep.number;
    console.log('the step count is ' + stepCount)
    this.newSteps.push(firstStep);
    $('.track-box').append(this.el);
    this.newTrack = new Track();
    this.render();
  },

  render: function () {
    this.$el.append( this.template({item: this.model }) )
  },

  addStep: function(){
    var addedStep = new Step;
    addedStep.number = stepCount + 1;
    stepCount = addedStep.number;
    console.log('this step number is ' + addedStep.number)
    console.log('the step count is now ' + stepCount)
    this.newSteps.push(addedStep)
    // creates new step view to add another step
    new StepView();

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

    // fix scope issue
    var that = this;

    // // looping through all the steps
    // if (validateSave()) {
    //   _.each(this.newSteps, function(step){
    //     step.save(null, {
    //       success: function(){
    //          // adding relation between step and track
    //         that.newTrack.relation("steps").add(step)
    //         // adds 1 to the count
    //         count++;
            
    //         if (count == total) {
    //           // now all saves have finished, so we can save the track
    //           that.finalizeSaveTrack()
    //         }
    //       }
    //     })
    //   })
    // } 
  },

  // finalizeSaveTrack: function(){
  //     this.newTrack.save(null, {
  //       success: function(newTrack) {
  //         // Execute any logic that should take place after the object is saved.
  //         // save steps and set 
  //         alert('Track Save SUccessful!');
  //         window.location.href = "#/yourtracks"
  //       },
  //       error: function(newTrack, error) {
  //         // Execute any logic that should take place if the save fails.
  //         // error is a Parse.Error with an error code and description.
  //         alert('Failed to create new object, with error code: ' + error.description);
  //       }
      
  //   });
  // },
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
    this.$el.append( this.template({item: this.model}) );
    // new TrackView();

  },


}),

TrackView = Backbone.View.extend({

  className: 'track',

  template: _.template( $('#your-track-view-template').text() ),
  
  events: {
    "click .track" : "renderApplicants",
  },

  initialize: function () {
    console.log(this.model)
    $('.main-view').html('');
    $('.yourtracks').append(this.el);
    this.render();
  },

  render: function () {
    this.$el.append( this.template({item: this.model }) );
  },

  // renderApplicants: function () {
  //   this.track
    
  // },

});

TrackApplicantsView = Backbone.View.extend({

  template: _.template( $('#track-applicants-template').text() ),

  initialize: function () {
    $('.track-window').html('');
    $('.track-window').append(this.el);
    this.render();
  },

  render: function () {
    this.$el.append( this.template({item: this.model }) );
    // this.fetchApplicants();
    // $('.fill-view').append('<div class="header-filler"></div>')
  },

  // fetchApplicants: function(){
  //   var applicants = $.get('http://company-directory.herokuapp.com/api/v1/applicants.json');
  //   console.log(applicants)
  // },

});

ApplicantView = Backbone.View.extend({

  className: 'applicant',

  template: _.template( $('#applicant-view-template').text() ) ,

  initialize: function () {
    // $('.main-view').html('');
    $('.track-window').append(this.el);
    this.render();
  },

  render: function () {
    this.$el.append( this.template({item: this.model }) );
  },

});

TypeformView = Backbone.View.extend({

  className: 'applicant-typeform',

  masterTemplate: _.template($('#typeform-template').text()),
  questionTemplate: _.template($('#question-template').text()),

  initialize: function(options){
    console.log(options)
    $('.track-window').html('');
    $('.track-window').append(this.el);
    this.render()
  },

  render: function(){
    this.$el.append(this.masterTemplate({item: this.model}));
    this.$el.append(this.questionTemplate({item: this.model}));
  },

  fetchQuestions: function(){
    $.get("http://company-directory.herokuapp.com/api/v1/applicants/:applicant_id/applications/:application_id/questions.json")
  },


});

QuestionView = Backbone.View.extend({

  className: 'question-response',


  initialize: function(){
    // $('.track-window').html('');
    $('.question-box').append(this.el);
    this.render()
  },

  render: function(){
    this.$el.append(this.template({item: this.model}));
  },


});





function validateSave (){

  // reset status
  var good = true;
  $('.errormessage-left').removeClass('active-left')
  $('input').removeClass("warning")
  $('.step-title, .track-name').each(function(){
    if ($(this).val() == "") {
      console.log("found an empty");
      good = false;
      $(this).addClass("warning")
      $('.errormessage-left').addClass('active-left'),
      $('.modal').addClass('modal-active'); 
    }
  })
  if(!$(".action").select2("val")){
      $(this).addClass("warning")
      $('.errormessage-left').addClass('active-left'),
      $('.modal').addClass('modal-active'); 
    good = false;
  }
  console.log(good)
  return good
}

// modal close button
$('.modal-button').click(function () {
  console.log('done!')
  $('.modal').removeClass('modal-active');
})