import BaseController from '../../../controllers/base';
import Ember from 'ember';

export default BaseController.extend({
  ////////////////////////////////////////
  // Dependencies
  ////////////////////////////////////////
  ////////////////////////////////////////

  ////////////////////////////////////////
  // Properties
  ////////////////////////////////////////
  filterText: '',

  memberships: Ember.computed('model.organizationMemberships.@each.person.name', 'filterText', function() {
    let sortedList = this.get('model.organizationMemberships').sortBy('person.name');
    return sortedList.filter( (p) => {
      let propertyMap = `${p.get('person.name')}`;
      return propertyMap.toLowerCase().indexOf(this.get('filterText').toLowerCase()) !== -1;
    });
  }),

  isClearFilterDisabled: Ember.computed('filterText', function(){ return !this.get('filterText'); }),

  resetProperties: function() {
    this.set('filterText', '');
  },
  ////////////////////////////////////////

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

  _togglePrimary(membership){
    membership.set('isPrimary', !membership.get('isPrimary'));
    membership.save().then( () => {
      this.get('flashMessages').notifySuccess(`${membership.get('person.name')} updated.`);
    });
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
      let name = this.get('model.name');
      let didConfirm = window.confirm(`Are you sure you want to remove ${name}?`);
      if (didConfirm){
        this.get('model').destroyRecord().then( () => {
          this.transitionToRoute('organizations.index');
          this.get('flashMessages').notifySuccess(`${name} has been removed.`);
        });
      }
    },
    togglePrimary(membership){
      this._togglePrimary(membership);
    },
    clearFilter() {
      this.set('filterText', '');
    }
  }
  ////////////////////////////////////////
});



