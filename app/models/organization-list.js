import DS from 'ember-data';

export default DS.Model.extend({

  createdAt:       DS.attr('date'),
  updatedAt:       DS.attr('date'),
  mailchimpListId: DS.attr('string'),
  categories:      DS.attr(),

  organization: DS.belongsTo('organization'),

});
