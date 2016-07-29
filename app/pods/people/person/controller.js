import BaseController from '../../../controllers/base';

export default BaseController.extend({
  ////////////////////////////////////////
  // Actions
  ////////////////////////////////////////
  actions: {
    save: function() {
      var _this = this;
      this.get('model').save().then(function(){
        _this.transitionToRoute('people.index');
      });
    },
    cancel: function() {
      this.transitionToRoute('people');
    }
  }
  ////////////////////////////////////////
});
