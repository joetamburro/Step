console.log('hello models script')

Step = Parse.Object.extend ({
  defaults: {
    "step-number" : "n/a",
    "title"       : "n/a", 
    "action"      : "n/a" 
  },

  className: "Step",

  // initialize: function(){
   
  // },

}),

Track = Parse.Object.extend({

  className: "Track",

  // initialize: function(){

  // },

})