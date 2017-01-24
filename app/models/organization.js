import DS from 'ember-data';

export default DS.Model.extend({

  createdAt:  DS.attr('date'),
  updatedAt:  DS.attr('date'),
  locationId: DS.attr('string'),
  name:       DS.attr('string'),

  organizationMemberships: DS.hasMany('organizationMembership')
});
