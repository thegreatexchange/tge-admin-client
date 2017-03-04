import BaseRoute from '../../../routes/base';
// import RSVP      from 'rsvp';

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
    let promises = [
      this.get('mailchimpClient').refreshLists(),
      this.store.query('organizationMembership', { organization_id: model.get('id') }),
      this.store.query('organizationList', { organization_id: model.get('id') })
    ];
    return Ember.RSVP.all(promises);
  },
  ////////////////////////////////////////
});



