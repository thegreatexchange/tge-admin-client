import DS from 'ember-data';

export default DS.Model.extend({

  createdAt:   DS.attr('date'),
  updatedAt:   DS.attr('date'),
  startsAt:    DS.attr('date'),
  endsAt:      DS.attr('date'),
  description: DS.attr('string'),
  name:        DS.attr('string'),

  organization: DS.belongsTo('organization')

});
