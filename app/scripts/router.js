console.log('hello router script')

AppRouter = Backbone.Router.extend ({
// when router init'd instantiate steps and tracks collections
  routes: {
    ""                                          : "loginScreen",
    "home"                                      : "loginScreen",
    "createtrack"                               : "createTrack",
    "yourtracks"                                : "yourTracks",
    "yourtracks/:track_id"                      : "trackApplicants",
    "yourtracks/:track-id/:applicant" : "applicantsTypeform"
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

  trackApplicants: function(options){
    var id = options.id
    $('.track-box').html('');
    $('.main-view').html('');
    new TrackApplicantsView();
    console.log('firing torpedoes')
    this.applicants.fetch({
      success: function(applicants){
        console.log('hey dude')
        applicants.each(function(applicant){
          new ApplicantView( {model: applicant, trackId: id} )
        })
      }
    })
  },

  applicantsTypeform: function(){
    $('.track-box').html('');
    $('.main-view').html('');
    new TypeformView();
  }

})

var router = new AppRouter()
Backbone.history.start()