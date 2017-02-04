import Ember from 'ember';
const {ipcRenderer} = require('electron');

const {
  inject: {service}
} = Ember;

export default Ember.Service.extend(Ember.Evented, {
  timer: service(),
  init() {
    ipcRenderer.on('timerFirstTick', (sender, date) => {
      this.get('timer').syncStart(new Date(date));
    });
    ipcRenderer.on('timerLastTick', (sender, date) => {
      this.get('timer').syncPause(new Date(date));
    });
  },
  setFirstTick(date) {
    ipcRenderer.send('timerFirstTick', date);
  },
  setLastTick(date) {
    ipcRenderer.send('timerLastTick', date);
  }
});
