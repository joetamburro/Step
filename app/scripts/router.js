console.log('hello router script')

AppRouter = Backbone.Router.extend ({

  initialize: function(){
    this.items = new StepsCollection()
  },

  routes: {
    ""                    : "createTrack",
    "home"                : "createTrack",
    "yourtracks"          : "yourTracks",
  },

  createTrack: function(){
    // $('.track-box').html('');
    new CreateTrackView();
    new StepView();
  },

  yourTracks: function() {
    // $('.track-box').html('');
  new YourTracksView()
  },

})


var router = new AppRouter()
Backbone.history.start()