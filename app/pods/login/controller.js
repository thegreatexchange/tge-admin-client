import Ember from 'ember';

export default Ember.Controller.extend({

  ////////////////////////////////////////
  // Actions
  ////////////////////////////////////////
  session:       Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  ////////////////////////////////////////

  ////////////////////////////////////////
  // Actions
  ////////////////////////////////////////
  actions: {
    authenticate: function() {
      var credentials = this.getProperties('identification', 'password'),
        authenticator = 'authenticator:jwt';

      this.get('session').authenticate(authenticator, credentials).catch((reason) => {
        reason.errors.map((error) => {
          this.get('flashMessages').notifyDanger(error);
        });
      });
    }
  }
  ////////////////////////////////////////
});
