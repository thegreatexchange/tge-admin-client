import Ember from 'ember';

export default Ember.Mixin.create({

  hideNavbar:  true,
  application: Ember.inject.service(),

  actions: {
    didTransition() {
      if (this.get('hideNavbar')) {
        this.get('application').hideNavbar();
      }
    },

    willTransition() {
      if (this.get('hideNavbar')) {
        this.get('application').showNavbar();
      }
    }
  }

});
