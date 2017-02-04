import Ember from 'ember';
import {padStart} from 'lodash/string';

const {
  computed,
  inject: {service}
} = Ember;

export default Ember.Component.extend({
  classNames: ['flex-60', 'whats-the-time'],
  clock: service(),
  hour: computed('clock.hour', function () {
    return padStart(this.get('clock.hour'), 2, '0');
  }),
  minute: computed('clock.minute', function () {
    return padStart(this.get('clock.minute'), 2, '0');
  })
});
