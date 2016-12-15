import BaseRoute from '../../../routes/base';

export default BaseRoute.extend({
  ////////////////////////////////////////
  // Lifecycle hooks
  ////////////////////////////////////////
  model() {
    return this.store.findAll('person');
  },

  setupController(controller, model) {
    this._super(controller, model);
    this.setPeople(controller);
  },
  ////////////////////////////////////////

  setPeople(controller) {
    let people = [];
    people.addObjects(this.store.peekAll('person'));
    people.addObjects(this.store.peekAll('volunteer'));
    controller.set('people', people);
  } 
});

