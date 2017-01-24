import BaseRoute from '../../../routes/base';

export default BaseRoute.extend({
  ////////////////////////////////////////
  // Lifecycle hooks
  ////////////////////////////////////////
  afterModel(model) {
    return this.store.query('organizationMembership', { person_id: model.get('id') });
  },
  ////////////////////////////////////////

});

