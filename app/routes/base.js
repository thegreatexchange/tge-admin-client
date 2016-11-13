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
  // Dependencies
  ////////////////////////////////////////
  flashMessages: Ember.inject.service('flashMessages'),
  ////////////////////////////////////////

  ////////////////////////////////////////
  // Properties
  ////////////////////////////////////////
  typeKey:            null,
  unloadOnDeactivate: false,
  ////////////////////////////////////////

  ////////////////////////////////////////
  // Route Lifecycle
  ////////////////////////////////////////
  setupController(controller, model) {
    this._super(controller,model);
    this.beforeAddObservers(controller, model);
    controller.addObservers();
    this.afterAddObservers(controller, model);
  },
  beforeAddObservers() {},
  afterAddObservers()  {},
  deactivate() {
    this.get('controller').removeObservers();
    this.get('controller').resetProperties();
    if (this.get('typeKey') && this.get('unloadOnDeactivate')) {
      this.store.unloadAll(this.get('typeKey'));
    }
  },
  ////////////////////////////////////////

  ////////////////////////////////////////
  // Private
  ////////////////////////////////////////
  _createRecord(params){
    return this.store.createRecord(this.get('typeKey'), params);
  }
  ////////////////////////////////////////
});
