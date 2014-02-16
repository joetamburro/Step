console.log('hello router script')

AppRouter = Backbone.Router.extend ({
// when router init'd instantiate steps and tracks collections
  initialize: function(){
    this.steps = new StepsCollection();
    this.tracks = new TrackCollection();
    // console.log(this.steps)
    // console.log(this.tracks)
  },

  routes: {
    ""                    : "loginScreen",
    "home"                : "loginScreen",
    "createtrack"         : "createTrack",
    "yourtracks"          : "yourTracks",
    "applicants"          : "applicants",
    "applicants/typeform" : 'applicantsTypeform'
  },

  loginScreen: function () {
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
    // $('.main-view').html('');
    new YourTracksView();
    getTracks();
},
// fetching all tracks. 
  //   this.tracks.fetch({
  //     success: function(tracks){
  //       tracks.each(function(track){
  //         new TrackView( {model: track} )
  //       })
  //     }
  //   })
  // },

  applicants: function(){
    $('.track-box').html('');
    $('.main-view').html('');
    new ApplicantsView();
  },

  applicantsTypeform: function(){
    $('.track-box').html('');
    $('.main-view').html('');
    new TypeformView();
  }


})


var router = new AppRouter()
Backbone.history.start()