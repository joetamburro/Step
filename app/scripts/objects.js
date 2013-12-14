console.log('hello models script')

Step = Parse.Object.extend ({
  defaults: {
    "stepNumber" : "",
    "title"       : "", 
    "action"      : "" 
  },

  className: "Step",

  initialize: function(){
   
  },

}),

Track = Parse.Object.extend({
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