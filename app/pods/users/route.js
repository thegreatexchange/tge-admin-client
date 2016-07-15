import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.get('store').findAll('user')
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.resetProperties();
  },

});
