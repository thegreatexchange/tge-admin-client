import Ember from 'ember';

export default Ember.Service.extend({

  messages: [],

  notifySuccess(message) {
    this.get('messages').addObject({
      message: message,
      type:    'success'
    });
  },

  notifyInfo(message) {
    this.get('messages').addObject({
      message: message,
      type:    'info'
    });
  },

  notifyWarning(message) {
    this.get('messages').addObject({
      message: message,
      type:    'warning'
    });
  },

  notifyDanger(message) {
    this.get('messages').addObject({
      message: message,
      type:    'danger'
    });
  },

  dismiss(message){
    this.get('messages').removeObject(message);
  },

  dismissAll(){
    this.get('messages').clear();
  }

});
