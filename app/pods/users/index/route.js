import BaseRoute from '../../../routes/base';

export default BaseRoute.extend({

  model() {
    return this.store.findAll('user');
  }
});
