import Ember from 'ember';

const {
  inject: { service }
} = Ember;

export default Ember.Component.extend({
  classNames: ['flex-60', 'whats-the-time'],
  clock: service()
});
