import BaseController from '../../../controllers/base';

export default BaseController.extend({
  ////////////////////////////////////////
  // Dependencies
  ////////////////////////////////////////
  ////////////////////////////////////////

  ////////////////////////////////////////
  // Properties
  ////////////////////////////////////////
  resetProperties: function() {
  },
  ////////////////////////////////////////

  _destroyMembershipWithPrompt(membership) {
    let personName       = membership.get('person.name');
    let organizationName = membership.get('organization.name')

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
        this.transitionToRoute('organizations.index');
        message = model.get('name');
        message = message + ' has been updated successfully.';
        this.get('flashMessages').notifySuccess(message);
      });
    },
    cancel() {
      this.transitionToRoute('organizations.index');
    },
    removeMembership(membership){
      this._destroyMembershipWithPrompt(membership);
    },
    destroy() {
      name = this.get('model.name');
      let didConfirm = window.confirm(`Are you sure you want to remove ${name}?`);
      if (didConfirm){
        this.get('model').destroyRecord().then( () => {
          this.transitionToRoute('organizations.index');
          this.get('flashMessages').notifySuccess(`${name} has been removed.`);
        });
      }
    }
  }
  ////////////////////////////////////////
});



