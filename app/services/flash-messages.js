import Ember from 'ember';

export default Ember.Service.extend({

  messages: [],

  notifySuccess(message, persist=false) {
    this.get('messages').addObject({
      message: message,
      type:    'success',
      persist: persist
    });
  },

  notifyInfo(message, persist=false) {
    this.get('messages').addObject({
      message: message,
      type:    'info',
      persist: persist
    });
  },

  notifyWarning(message, persist=false) {
    this.get('messages').addObject({
      message: message,
      type:    'warning',
      persist: persist
    });
  },

  notifyDanger(message, persist=false) {
    this.get('messages').addObject({
      message: message,
      type:    'danger',
      persist: persist
    });
  },

  dismiss(message){
    this.get('messages').removeObject(message);
  },

  dismissAll(){
    this.get('messages').clear();
  }

});
