import Ember from 'ember';

const {
  inject: { service }
} = Ember;

export default Ember.Controller.extend({
  ipcRenderer: service(),

  init() {
    this.get('ipcRenderer');
  }
});
