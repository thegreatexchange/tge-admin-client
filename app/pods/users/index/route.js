import BaseRoute from '../../../routes/base';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('user');
  }
});
