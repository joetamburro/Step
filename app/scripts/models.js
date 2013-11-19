console.log('hello models script')

Step = Parse.Object.extend ({

  className: "Step",

  initialize: function(){
    console.log('Model initialized!')
  },

})