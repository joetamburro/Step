console.log('hello router script')

AppRouter = Backbone.Router.extend ({
// when router init'd instantiate steps and tracks collections
  initialize: function(){
    this.steps = new StepsCollection();
    this.tracks = new TrackCollection();
    this.applicants = new ApplicantsCollection();
  },

  routes: {
    ""                              : "loginScreen",
    "home"                          : "loginScreen",
    "createtrack"                   : "createTrack",
    "yourtracks"                    : "yourTracks",
    "yourtracks/:id"                : "trackApplicants",
    "yourtracks/:id/applicant/:id"  : "applicantsTypeform"
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
    this.applicants.fetch({
      success: function(applicants){
        applicants.each(function(applicant){
          new ApplicantView( {model: applicant} )
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