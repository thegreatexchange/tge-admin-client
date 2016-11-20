import Ember from 'ember';

export default Ember.Service.extend({
  ////////////////////////////////////////
  // Actions
  ////////////////////////////////////////
  navbarHidden: false,
  ////////////////////////////////////////

  hideNavbar() {
    this.set('navbarHidden', true);
  },

  showNavbar() {
    this.set('navbarHidden', false);
  }
});
