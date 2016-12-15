import DS from 'ember-data';

export default DS.Model.extend({

  createdAt:  DS.attr('date'),
  updatedAt:  DS.attr('date'),
  locationId: DS.attr('string'),
  schoolId:   DS.attr('string'),
  name:       DS.attr('string'),

//   school:     DS.belongsTo('school')

});