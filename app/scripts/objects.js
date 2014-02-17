console.log('hello models script')

Step = Backbone.Model.extend ({

  className: "Step",

  initialize: function(){
   
  },

}),

Track = Backbone.Model.extend({

  className: "Track",

  initialize: function(){

  },

  idAttribute: "_id",

  // url: 'http://company-directory.herokuapp.com/api/v1/tracks.json'

})

Applicant = Backbone.Model.extend({

  className: "Applicant",

  initialize: function(){

  },


  // idAttribute: "_id",

})