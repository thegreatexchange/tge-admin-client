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
    membership.save().then((membership) => {
      let message = membership.get('person.name') + " has been added to" + membership.get('organization.name') + ".";
      this.get('flashMessages').notifySuccess(message);
    });
  },

  _destroyMembershipWithPrompt(membership) {
    let personName       = membership.get('person.name');
    let organizationName = membership.get('organization.name');

    let message = "Are you sure you want to remove " + personName + " from " + organizationName + "?";
    let confirmationResult = window.confirm(message);

    if (confirmationResult) {
      membership.destroyRecord().then( () => {
        let message = personName + " has been removed from " + organizationName + ".";
        this.get('flashMessages').notifySuccess(message);
      });
    }
  },

  ////////////////////////////////////////
  // Actions
  ////////////////////////////////////////
  actions: {
    save() {
      this.get('model').save().then((model) => {
        let message;
        this.transitionToRoute('people.index');
        message = model.get('name');
        message = message + ' has been updated successfully.';
        this.get('flashMessages').notifySuccess(message);
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
    },
    destroy() {
      let name = this.get('model.name');
      let didConfirm = window.confirm(`Are you sure you want to remove ${name}?`);
      if (didConfirm){
        this.get('model').destroyRecord().then( () => {
          this.transitionToRoute('people.index');
          this.get('flashMessages').notifySuccess(`${name} has been removed.`);
        });
      }
    }
  }
  ////////////////////////////////////////
});

