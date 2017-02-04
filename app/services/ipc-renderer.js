import Ember from 'ember';
const {ipcRenderer} = require('electron');

const {
  inject: {service}
} = Ember;

export default Ember.Service.extend(Ember.Evented, {
  timer: service(),
  lastMessage: service(),
  init() {
    ipcRenderer.on('timerFirstTick', (sender, date) => {
      this.get('timer').syncStart(new Date(date));
    });
    ipcRenderer.on('timerLastTick', (sender, date) => {
      this.get('timer').syncPause(new Date(date));
    });
    ipcRenderer.on('messageUpdate', (sender, msg) => {
      console.log(msg);
      this.get('lastMessage').syncMsg(msg);
    })
  },
  setFirstTick(date) {
    ipcRenderer.send('timerFirstTick', date);
  },
  setLastTick(date) {
    ipcRenderer.send('timerLastTick', date);
  },
  setMessage(msg) {
    ipcRenderer.send('messageUpdate', msg);
  }
});
