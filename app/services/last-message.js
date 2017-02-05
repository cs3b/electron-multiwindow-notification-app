import Ember from 'ember';

const {
  Object,
  computed,
  run: { later, cancel },
  inject: { service }
} = Ember;

export default Ember.Service.extend({
  ipcRenderer: service(),
  nextClear: null,
  init() {
    this._super(...arguments);
    this.clear();
  },
  setMsg(info) {
    this._setMsg(info);
    this.get('ipcRenderer').setMessage(info);
  },
  syncMsg(info) {
    this._setMsg(info);
  },
  _setMsg(info) {
    this._scheduleClear();
    console.log(this.get('msg'));
    for (let property in info) this.get('msg').set(property, info[property]);
    console.log(this.get('msg'));
  },

  present: computed('msg.{numberPresent,comment,lastDuration}', function() {
    return (this.get('msg.numberPresent') != null) || (this.get('msg.comment') != null) || (this.get('msg.lastDuration') != null);
  }),

  clear() {
    this.set('msg', new Object({
      numberPresent: null,
      numberListening: null,
      lastDuration: null,
      comment: null,
    }));
  },
  _scheduleClear() {
    if (this.get('nextClear')) {
      cancel(this.get('nextClear'));
    }
    this.set('nextClear', later(this, this.clear, 60*1000));
  }

});
