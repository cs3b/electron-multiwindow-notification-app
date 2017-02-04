import Ember from 'ember';

const {
  inject: {service}
} = Ember;

export default Ember.Component.extend({
  classNames: ['flex', 'timer'],
  timer: service()
});
