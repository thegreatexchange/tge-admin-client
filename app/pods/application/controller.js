import Ember from 'ember';

export default Ember.Controller.extend({
  ////////////////////////////////////////
  // Dependencies
  ////////////////////////////////////////
  session: Ember.inject.service('session'),
  ////////////////////////////////////////

  ////////////////////////////////////////
  // Actions
  ////////////////////////////////////////
  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    },

    toggleSidebar: function() {
      if (this.get('isCollapsed')) {
        this.$('#sidebar-menu').switchClass("col-md-2", "col-md-0",400);
        this.set('isCollapsed', false);
      } else {
        this.set('isCollapsed', true);
      }
    }
  }
  ////////////////////////////////////////
});
