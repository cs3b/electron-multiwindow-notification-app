import Ember from 'ember';

const {
  Object,
  computed,
  run: { later }
} = Ember;

export default Ember.Service.extend({
  init() {
    this._super(...arguments);
    this.clear();
  },
  setMsg(info) {
    later(this, this.clear, 30*1000);
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
  }

});
