console.log('hello router script')

AppRouter = Backbone.Router.extend ({

  initialize: function(){

  },

  routes: {
    ""                    : "homeView",
  },

  homeView: function(){

  },

 
})


var router = new AppRouter()
Backbone.history.start()