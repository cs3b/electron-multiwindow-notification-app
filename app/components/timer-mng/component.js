import Ember from 'ember';

const {
  inject: {service}
} = Ember;

export default Ember.Component.extend({
  timer: service(),
  actions: {
    start() {
      this.get('timer').start();
    },
    stop() {
      this.get('timer').pause();
    }
  }
});
