import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(
  ////////////////////////////////////////
  // Mixins
  ////////////////////////////////////////
  AuthenticatedRouteMixin,
  ////////////////////////////////////////
{

  ////////////////////////////////////////
  // Properties
  ////////////////////////////////////////
  typeKey:            null,
  unloadOnDeactivate: true,
  ////////////////////////////////////////

  deactivate() {
    this.get('controller').resetProperties();
    if (this.get('typeKey') && this.get('unloadOnDeactivate')) {
      this.store.unloadAll(this.get('typeKey'));
    }
  }

});
