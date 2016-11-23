import Ember from 'ember';

export default Ember.Controller.extend({
  ////////////////////////////////////////
  // Dependencies
  ////////////////////////////////////////
  session:     Ember.inject.service(),
  application: Ember.inject.service(),
  ////////////////////////////////////////

  ////////////////////////////////////////
  // Properties
  ////////////////////////////////////////
  authorizations: Ember.computed('session.session.content.authenticated.authorizations.[]', function() {
    return this.get('session.session.content.authenticated.authorizations');
  }),

  isAdminAppAuthorized: Ember.computed('authorizations.[]', function() {
    if (!this.get('authorizations')) {
      return false;
    }
    return this.get('authorizations').includes('app_admin');
  }),
  isEventAppAuthorized: Ember.computed('authorizations.[]', function() {
    if (!this.get('authorizations')) {
      return false;
    }
    return this.get('authorizations').includes('app_event');
  }),
  ////////////////////////////////////////
  ////////////////////////////////////////
  // Actions
  ////////////////////////////////////////
  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
  ////////////////////////////////////////
});
