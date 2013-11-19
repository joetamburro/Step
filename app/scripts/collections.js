console.log('hello collection script')

StepsCollection = Parse.Collection.extend ({

  model: Step,

  initialize: function(){
    console.log('Collection instantiated')
  },

})