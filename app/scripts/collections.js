console.log('hello collection script')

StepsCollection = Backbone.Collection.extend ({

  model: Step,

  url: 'http://company-directory.herokuapp.com/api/v1/tracks/:track_id/steps.json',

  initialize: function(){
    console.log('steps collection instantiated')
  },

}),

TrackCollection = Backbone.Collection.extend ({

  model: Track,

  url: 'http://company-directory.herokuapp.com/api/v1/tracks.json',

  initialize: function() {
    console.log('track collection instantiated')

  },

}),

ApplicantsCollection = Backbone.Collection.extend ({

  model: Applicant,
  
  url: 'http://company-directory.herokuapp.com/api/v1/applicants.json',

  initialize: function() {
    console.log('applicant collection instantiated')

  },

})

  QuestionsCollection = Backbone.Collection.extend ({

    model: Question,
    
    url: "http://company-directory.herokuapp.com/api/v1/applicants/'appid'/applications/:application_id/questions.json",

    initialize: function() {
      console.log('applicant collection instantiated')

    },

})