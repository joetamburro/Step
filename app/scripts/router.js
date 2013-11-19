console.log('hello router script')

AppRouter = Backbone.Router.extend ({

  initialize: function(){
  
  },

  routes: {
    ""                    : "createTrack",
  },

  createTrack: function(){
    $('track-box').html('')
    new TrackView()
  },

 
})


var router = new AppRouter()
Backbone.history.start()