console.log('hello models script')

Step = Parse.Object.extend ({
  defaults: {
    "stepNumber" : "",
    "title"       : "", 
    "action"      : "" 
  },

  className: "Step",

  // initialize: function(){
   
  // },

}),

Track = Parse.Object.extend({
  defaults: {
    "id"        : "",
    "name"      : "", 
    "settings"  : "",
    "user_id"    : "",
  },

  className: "Track",

  // initialize: function(){

  // },

})