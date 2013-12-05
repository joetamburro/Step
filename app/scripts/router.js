console.log('hello router script')

AppRouter = Backbone.Router.extend ({

  initialize: function(){
    // this.items = new StepsCollection()
  },

  routes: {
    ""                    : "loginScreen",
    "home"                : "loginScreen",
    "createtrack"         : "createTrack",
    "yourtracks"          : "yourTracks",
  },

  loginScreen: function () {
    $('.track-box').html('')
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
  $('.main-view').html('');
  new YourTracksView()
  },

})


var router = new AppRouter()
Backbone.history.start()