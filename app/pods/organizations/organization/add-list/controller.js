
import BaseController from '../../../../controllers/base';
import Ember from 'ember';

export default BaseController.extend({
  ////////////////////////////////////////
  // Dependencies
  ////////////////////////////////////////
  mailchimpClient: Ember.inject.service('mailchimp-client'),
  organization:    Ember.inject.controller('organizations.organization'),
  ////////////////////////////////////////
  buttons: [
    { name: 'Add list', type: 'primary', action: 'save' },
    { name: 'Cancel',   type: 'default', action: 'cancel' }
  ],

  showModal(model) {
    this.set('model', model);
    $('#modal').modal("show");
  },

  hideModal() {
    this.set('model', null);
    $('#modal').modal("hide");
  },

  _addOrganizationListFor(list) {
    let organizationList    = this.store.createRecord('organizationList');
    let successMessage;

    organizationList.set('mailchimpListId', list.id);
    organizationList.set('organization', this.get('organization.model'));
    organizationList.save().then(() => {
      this.hideModal();
      successMessage = `Successfully added ${this.get('model.name')} to the ${list.name} MailChimp List.`;
      this.get('flashMessages').notifySuccess(successMessage);
    });
  },
  ////////////////////////////////////////
  // Actions
  ////////////////////////////////////////
  actions: {
    save() {
      this._addOrganizationListFor(this.get('model'));
    },
    cancel() {
      this.hideModal();
    },
  }
  ////////////////////////////////////////
});

