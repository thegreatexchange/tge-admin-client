import Ember from 'ember';

export default Ember.Component.extend({

  ////////////////////////////////////////
  // Dependencies
  ////////////////////////////////////////
  flashMessages: Ember.inject.service('flashMessages'),
  ////////////////////////////////////////

  ////////////////////////////////////////
  // Properties
  ////////////////////////////////////////
  flashMessage: null,

  glyphicon: Ember.computed('flashMessage.type', function() {
    let glyphicon;
    switch (this.get('flashMessage.type')) {
      case 'success':
        glyphicon = 'glyphicon glyphicon-ok-sign';
        break;
      case 'info':
        glyphicon = 'glyphicon glyphicon-info-sign';
        break;
      case 'warning':
        glyphicon = 'glyphicon glyphicon-question-sign';
        break;
      case 'danger':
        glyphicon = 'glyphicon glyphicon-remove-sign';
        break;
      default:
        glyphicon = 'glyphicon glyphicon-question-sign';
    }
    return glyphicon;
  }),

  didRender() {
    if (!this.get('flashMessage.persist')) {
      Ember.run.later(() => { this.send('dismiss') }, 3000);
    }
  },
  ////////////////////////////////////////

  ////////////////////////////////////////
  // Actions
  ////////////////////////////////////////
  actions: {
    dismiss(){
      let element = this.$(this.get('element'))
      if (element){
        let alert = element.find('.alert');
        this.$(alert).on('closed.bs.alert', () => {
          this.get('flashMessages').dismiss(this.get('flashMessage'));
        });
        alert.alert('close');
      }
    }
  }
  ////////////////////////////////////////

});
