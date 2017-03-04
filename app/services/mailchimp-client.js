import Ember from 'ember';

export default Ember.Service.extend({

  ajax: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  lists: [],

  refreshLists(callback=Ember.K) {
    this.get('ajax').request('/mailchimp/lists').then((lists) => {
      callback.call(this, lists);
      this.set('lists', lists);
    }).catch((errors) => {
      this.get('flashMessages').notifyDanger(`Could not connect to mailchimp: ${errors.message}`);
    });
  },

});
