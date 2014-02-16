console.log('hello collection script')

StepsCollection = Backbone.Collection.extend ({

  model: Step,

  // url: 'http://company-directory.herokuapp.com/api/v1/students.json',

  initialize: function(){
    console.log('steps collection instantiated')
  },

}),

TrackCollection = Backbone.Collection.extend ({

  model: Track,

  // url: 'http://company-directory.herokuapp.com/api/v1/students.json',

  initialize: function() {
    console.log('track collection instantiated')

  },

}),

ApplicantsCollection = Backbone.Collection.extend ({

  model: Applicant,
  
  // url: 'http://company-directory.herokuapp.com/api/v1/students.json',

  initialize: function() {
    console.log('applicant collection instantiated')

  },


})