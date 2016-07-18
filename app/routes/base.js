import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(
  ////////////////////////////////////////
  // Mixins
  ////////////////////////////////////////
  AuthenticatedRouteMixin,
  ////////////////////////////////////////
{

  deactivate() {
    this.get('controller').resetProperties();
  }
});
