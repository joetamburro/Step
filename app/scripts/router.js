console.log('hello router script')

AppRouter = Backbone.Router.extend ({

  initialize: function(){
    this.steps = new StepsCollection();
    this.tracks = new TrackCollection();
    console.log(this.steps)
    console.log(this.tracks)
  },

  routes: {
    ""                    : "loginScreen",
    "home"                : "loginScreen",
    "createtrack"         : "createTrack",
    "yourtracks"          : "yourTracks",
  },

  loginScreen: function () {
    $('.track-box').html('')
    $('.main-view').html('');
    new SignupView();
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

    this.tracks.fetch({
      success: function(tracks){
        tracks.each(function(track){
          new TrackView( {model: track} )
        })
      }
    })
  },

})


var router = new AppRouter()
Backbone.history.start()