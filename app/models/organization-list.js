import DS from 'ember-data';

export default DS.Model.extend({

  createdAt:       DS.attr('date'),
  updatedAt:       DS.attr('date'),
  mailchimpListId: DS.attr('string'),
  categories:      DS.attr(),

  organization: DS.belongsTo('organization'),

  groupNames: Ember.computed('categories.@each.groups.@each.selected', function() {
    let groupNames = [];
    this.get('categories').forEach((category) => {
      category.groups.forEach((group) =>{
        if (group.selected) {
          groupNames.addObject(`${category.name} - ${group.name}`);
        }
      });
    });
    return groupNames;
  })
});
