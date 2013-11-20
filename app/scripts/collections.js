console.log('hello collection script')

StepsCollection = Parse.Collection.extend ({

  model: Step,

  initialize: function(){
    console.log('steps collection instantiated')
  },

}),

TrackCollection = Parse.Collection.extend ({

  model: Track,

  initialize: function() {
    console.log('track collection instantiated')

  },

})