import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';

export default AjaxService.extend({
  namespace: 'api/admin-client',
  session: Ember.inject.service(),
  headers: Ember.computed('session.session.content.authenticated.token', function () {
      let headers = {};
      const authToken = this.get('session.session.content.authenticated.token');
      if (authToken) {
        headers['Authorization'] = `Bearer ${authToken}`;
      }
      return headers;
    }
  )
});
