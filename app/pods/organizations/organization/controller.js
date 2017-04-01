import BaseController from '../../../controllers/base';
import Ember from 'ember';

export default BaseController.extend({
  ////////////////////////////////////////
  // Dependencies
  ////////////////////////////////////////
  mailchimpClient: Ember.inject.service('mailchimp-client'),
  addList:         Ember.inject.controller('organizations.organization.add-list'),
  ////////////////////////////////////////

  ////////////////////////////////////////
  // Properties
  ////////////////////////////////////////
  filterText:   '',

  mailchimpLists: Ember.computed('mailchimpClient.lists', 'model.organizationLists.[]', function(){
    return this.get('mailchimpClient.lists').filter((list) => {
      return !this.get('model.organizationLists').mapBy('mailchimpListId').includes(list.id);
    });
  }),

  memberships: Ember.computed('model.organizationMemberships.@each.person.name', 'filterText', function() {
    let sortedList = this.get('model.organizationMemberships').sortBy('person.name');
    return sortedList.filter( (p) => {
      let propertyMap = `${p.get('person.name')}`;
      return propertyMap.toLowerCase().indexOf(this.get('filterText').toLowerCase()) !== -1;
    });
  }),

  organizationLists: Ember.computed('model.organizationLists.@each.mailchimpListId', 'mailchimpClient.lists.@each.id', function(){
    return this.get('model.organizationLists').map((organizationList) => {
      let name = this.get('mailchimpClient.lists').findBy('id', organizationList.get('mailchimpListId'));
      if (name) {
        name = name.name;
      } else {
        name = organizationList.get('mailchimpListId');
      }
      return Ember.Object.create({
        organizationList: organizationList,
        name: name
      });
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


  _destroyOrganizationListFor(list) {
    let organizationList    = list.get('organizationList');
    let confirmationMessage = `Are you sure you want to remove the organization from the ${list.name} MailChimp List?`;
    let confirmationResult  = window.confirm(confirmationMessage);
    let successMessage;

    if (confirmationResult) {
      organizationList.destroyRecord().then(() => {
        successMessage = `Successfully removed ${this.get('model.name')} from the ${list.name} MailChimp List.`;
        this.get('flashMessages').notifySuccess(successMessage);
      });
    }
  },

  _addList(list){
    let setupModal = Ember.K
    if (list.id) {
      setupModal = function(groupData) {
        list.groupData = groupData;
        this.get('addList').showModal(list)
      }
      this.get('mailchimpClient').groups(list.id, setupModal.bind(this));
    }
  },

  ////////////////////////////////////////
  // Actions
  ////////////////////////////////////////
  actions: {
    save() {
      let message;

      this.get('model').save().then((model) => {
        this.transitionToRoute('organizations.index');
        message = `${model.get('name')} has been updated successfully.`;
        this.get('flashMessages').notifySuccess(message);
      });
    },
    cancel() {
      this.transitionToRoute('organizations.index');
    },
    removeMembership(membership){
      this._destroyMembershipWithPrompt(membership);
    },
    addList(list) {
      this._addList(list);
    },
    removeList(list) {
      this._destroyOrganizationListFor(list);
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



