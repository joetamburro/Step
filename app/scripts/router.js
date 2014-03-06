console.log('hello router script')

AppRouter = Backbone.Router.extend ({
// when router init'd instantiate steps and tracks collections
  routes: {
    ""                        : "loginScreen",
    "home"                    : "loginScreen",
    "createtrack"             : "createTrack",
    "yourtracks"              : "yourTracks",
    "yourtracks/:track_id"    : "trackApplicants",
    "applicant/:id"           : "applicantsTypeform"
  },

  initialize: function(){
    this.steps = new StepsCollection();
    this.tracks = new TrackCollection();
    this.applicants = new ApplicantsCollection();

  },


  loginScreen: function () {
    $('.track-window').html('')
    $('.track-box').html('')
    $('.main-view').html('');
    new HomeView();
  },

  createTrack: function(){
    $('.track-box').html('');
    $('.main-view').html('');
    new CreateTrackView();
    new StepView();
  },

  yourTracks: function() {
    $('.track-box').html('');
    $('.track-window').html('');
    new YourTracksView();
    this.tracks.fetch({
      success: function(tracks){
        tracks.each(function(track){
          new TrackView( {model: track} )
        })
      }
    })
  },

  trackApplicants: function(track_id){

    window.trackId = track_id
    $('.track-box').html('');
    $('.main-view').html('');
    new TrackApplicantsView();
    this.applicants.fetch({
      success: function(applicants){
        console.log(applicants)
        applicants.each(function(applicant, track_id){
          new ApplicantView( {model: applicant, trackId: track_id} )
        })
      }
    })
  },

  applicantsTypeform: function(id){
    window.applicantId = id; 
    $('.track-box').html('');
    $('.main-view').html('');
    new TypeformView({applicantId: id, name: name});
    // this.questions.fetch({
    //   success: function(question){
    //     question.each(function(question){
    //       new QuestionView( {model: question} )
    //     })
    //   }
    // })
  },
  // applicantsTypeform: function(){
  //   // var id = options.id;
  //   $('.track-box').html('');
  //   $('.main-view').html('');
  //   new TypeformView();
  // }
});


var router = new AppRouter()
Backbone.history.start()