console.log('hello router script')

AppRouter = Backbone.Router.extend ({

  initialize: function(){
    this.items = new StepsCollection()
  },

  routes: {
    ""                    : "createTrack",
    "yourtracks"          : "yourTracks",
  },

  createTrack: function(){
    new CreateTrackView();
    new StepView();
  },

  yourTracks: function() {
  new YourTracksView()
  },

})


var router = new AppRouter()
Backbone.history.start()