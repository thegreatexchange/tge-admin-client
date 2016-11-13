import Ember from 'ember';

export default Ember.Component.extend({

  ////////////////////////////////////////
  // Properties
  ////////////////////////////////////////
  model: null,

  errors: Ember.computed('model.errors.[]', function() {
    let errors = this.get('model.errors').map( function(error) {
      let attribute = error.attribute.capitalize(),
          message   = error.message + '.';

      return { attribute: attribute, message: message };
    });
    return errors;
  }),

  hasErrors: Ember.computed('errors.length', function(){
    return this.get('errors.length') > 0;
  })
  ////////////////////////////////////////

});
