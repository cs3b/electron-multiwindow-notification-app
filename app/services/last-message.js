import Ember from 'ember';

const {
  Object,
  computed,
  run: { later, cancel }
} = Ember;

export default Ember.Service.extend({
  nextClear: null,
  init() {
    this._super(...arguments);
    this.clear();
    this.setMsg({numberPresent: 134, numberListening: 9});
  },
  setMsg(info) {
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
