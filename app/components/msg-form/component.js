import Ember from 'ember';
const {
  inject: { service }
} = Ember;
export default Ember.Component.extend({
  lastMessage: service(),
  init() {
    this._super(...arguments);
    this._reset();
  },
  actions: {
    submit(msg) {
      if ([msg.numberPresent, msg.comment].some( el => (typeof el)  == "string" && el.length > 1)) {
        const lastMessage = this.get('lastMessage');
        lastMessage.setMsg(msg);
        this._reset();
      } else {
        alert('Podaj liczbę obecnych,\nlub wprowadź komunikat');
      }
    }
  },
  _reset() {
    this.set('msg', {})
  }
});
