import BaseController from '../../../controllers/base';

export default BaseController.extend({
  ////////////////////////////////////////
  // Dependencies
  ////////////////////////////////////////
  people: Ember.inject.controller(),
  ////////////////////////////////////////

  ////////////////////////////////////////
  // Properties
  ////////////////////////////////////////
  availableOrganizations: Ember.computed('model.organizationMemberships.@each.organization', 'people.organizations.@each', function(){
    return this.get('people.organizations').filter((organization)=>{
      return !this.get('model.organizationMemberships').mapBy('organization.id').includes(organization.get('id'));
    });
  }),
  resetProperties: function() {
  },
  ////////////////////////////////////////

  _addMembershipFor(organization) {
    let membership = this.store.createRecord('organizationMembership');
    membership.set('person', this.get('model'));
    membership.set('organization', organization);
  },

  _destroyMembershipWithPrompt(membership) {
    membership.destroy();
  },

  _persistMemberships(func) {
    let promises = this.get('model.organizationMemberships').map((membership) => { membership.save(); });
    Ember.RSVP.all(promises).then(func);
  },
  ////////////////////////////////////////
  // Actions
  ////////////////////////////////////////
  actions: {
    save() {
      this.get('model').save().then((model) => {
        this._persistMemberships( () => {
          this.transitionToRoute('people.index');
          let message = `${model.get('name')} has been created successfully.`;
          this.get('flashMessages').notifySuccess(message);
        });
      });
    },
    cancel() {
      this.transitionToRoute('people.index');
    },
    addOrganization(organization) {
      this._addMembershipFor(organization);
    },
    removeMembership(membership){
      this._destroyMembershipWithPrompt(membership);
    }
  }
  ////////////////////////////////////////
});

