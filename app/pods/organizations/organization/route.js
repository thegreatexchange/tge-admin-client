import BaseRoute from '../../../routes/base';

export default BaseRoute.extend({
  ////////////////////////////////////////
  // Dependencies
  ////////////////////////////////////////
  mailchimpClient: Ember.inject.service('mailchimp-client'),
  ////////////////////////////////////////

  ////////////////////////////////////////
  // Properties
  ////////////////////////////////////////
  typeKey:            'organization',
  unloadOnDeactivate: false,
  ////////////////////////////////////////

  ////////////////////////////////////////
  // Lifecycle hooks
  ////////////////////////////////////////
  afterModel(model) {
    this.get('mailchimpClient').refreshLists();
    return this.store.query('organizationMembership', { organization_id: model.get('id') });
  },
  ////////////////////////////////////////
});



