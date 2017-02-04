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
    for (let property in info) this.get('msg').set(property, info[property]);
  },

  present: computed('msg.{numberPresent,comment}', function() {
    return (this.get('msg.numberPresent') != null) || (this.get('msg.comment') != null)
  }),

  clear() {
    this.set('msg', new Object({
      numberPresent: null,
      numberListening: null,
      comment: null,
    }));
  },
  _scheduleClear() {
    if (this.get('nextClear')) {
      cancel(this.get('nextClear'));
    }
    this.set('nextClear', later(this, this.clear, 30*1000));
  }

});
