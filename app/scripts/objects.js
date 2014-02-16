console.log('hello models script')

Step = Backbone.Model.extend ({
  defaults: {
    "stepNumber" : "",
    "title"       : "", 
    "action"      : "" 
  },

  className: "Step",

  initialize: function(){
   
  },

}),

Track = Backbone.Model.extend({
  defaults: {
    "id"        : "",
    "trackName"      : "", 
    "settings"  : "",
    "user_id"    : "",
  },

  className: "Track",

  initialize: function(){

  },

  idAttribute: "_id",


})

Applicant = Backbone.Model.extend({
  defaults: {
    "firstName"        : "",
    "lastName"      : "", 
    "course"  : "",
    "user_id"    : "",
  },

  className: "Applicant",

  initialize: function(){

  },

  parse: function (response){

  },

  // idAttribute: "_id",


})