
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
  categories: [],

  showModal(model) {
    this._formatGroupData(model.groupData);
    this.set('model', model);
    $('#modal').modal("show");
  },

  hideModal() {
    this.set('model', null);
    this.set('categories', []);
    $('#modal').modal("hide");
  },

  _formatGroupData(groupData) {
    groupData.forEach((c) => {
      let category = {};
      category.name = c.name;
      category.groups = [];
      c.groups.forEach((g) => {
        let group = { name: g.name, selected: false };
        category.groups.addObject(group);
      });
      this.get('categories').addObject(category);
    });
  },

  _addOrganizationListFor() {
    let list = this.get('model')
    let organizationList    = this.store.createRecord('organizationList');
    let successMessage;

    organizationList.set('mailchimpListId', list.id);
    organizationList.set('categories', this.get('categories'));
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
      this._addOrganizationListFor();
    },
    cancel() {
      this.hideModal();
    },
  }
  ////////////////////////////////////////
});

