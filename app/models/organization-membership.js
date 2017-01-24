import DS from 'ember-data';

export default DS.Model.extend({

  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  isPrimary: DS.attr('boolean'),

  organization: DS.belongsTo('organization'),
  person:       DS.belongsTo('person')

});
