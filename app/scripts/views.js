console.log('hello views script')

TrackView = Backbone.View.extend ({

  template: _.template( $('#track-view-template').text() ) 

})