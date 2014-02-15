console.log('hello collection script')

StepsCollection = Parse.Collection.extend ({

  model: Step,

  // url: 'http://company-directory.herokuapp.com/api/v1/students.json',

  initialize: function(){
    console.log('steps collection instantiated')
  },

}),

TrackCollection = Parse.Collection.extend ({

  model: Track,

  // url: 'http://company-directory.herokuapp.com/api/v1/students.json',

  initialize: function() {
    console.log('track collection instantiated')

  },

}),

ApplicantsCollection = Parse.Collection.extend ({

  model: Applicant,
  
  // url: 'http://company-directory.herokuapp.com/api/v1/students.json',

  initialize: function() {
    console.log('applicant collection instantiated')

  },


})