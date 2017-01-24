import BaseRoute from '../../../routes/base';
import Ember     from 'ember';

export default BaseRoute.extend({
  ////////////////////////////////////////
  // Lifecycle hooks
  ////////////////////////////////////////
  model() {
    return this.store.findAll('organization');
  }
  ////////////////////////////////////////
});
