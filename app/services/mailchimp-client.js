import Ember from 'ember';

export default Ember.Service.extend({

  ajax: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  lists: [],

  refreshLists(callback=Ember.K) {
    return this.get('ajax').request('/mailchimp/lists').then((lists) => {
      callback.call(this, lists);
      this.set('lists', lists);
    }).catch((errors) => {
      this.get('flashMessages').notifyDanger(`Could not connect to mailchimp: ${errors.message}`);
    });
  },

  groups(listId, callback=Ember.K) {
    return this.get('ajax').request(`/mailchimp/lists/${listId}/groups`).then((groups) => {
      callback.call(this, groups);
    }).catch((errors) => {
      this.get('flashMessages').notifyDanger(`Could not connect to mailchimp: ${errors.message}`);
    });
  }

});
