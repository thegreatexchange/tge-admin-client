import Ember from 'ember';

export default Ember.Controller.extend({
  ////////////////////////////////////////
  // Actions
  ////////////////////////////////////////
  actions: {
    toggleSidebar: function() {
      if (this.get('isCollapsed')) {
        $('#sidebar-menu').switchClass("col-md-2", "col-md-0",400)
        this.set('isCollapsed', false);
      } else {
        this.set('isCollapsed', true);
      }
    }
  }
  ////////////////////////////////////////
});
