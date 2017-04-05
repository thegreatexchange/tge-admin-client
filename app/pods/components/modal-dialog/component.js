import Ember from 'ember';

export default Ember.Component.extend({
  buttons: [],

  actions: {
    buttonClick(button) {
      this.sendAction(button.action);
    }
  }
});
