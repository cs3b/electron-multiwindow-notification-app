import Ember from 'ember';
import { padStart } from 'lodash/string';

const {
  computed,
  computed: { notEmpty },
  run: {cancel, later}
} = Ember;

export default Ember.Service.extend({
  minutes: 0,
  seconds: 0,
  firstTick: null,
  lastTick: null,
  nextTick: null,
  ticking: notEmpty('nextTick'),

  minute: computed('duration', function () {
    return this._format(this.get('duration') / 60);
  }),

  second: computed('duration', function() {
    return this._format(this.get('duration') % 60);
  }),

  duration: computed('lastTick', function() {
    let start = this.get('firstTick'),
      end = this.get('lastTick');

    return Math.round((end - start) / 1000);
  }),

  init() {
    this._super(...arguments);
  },

  start() {
    this.reset();
    this.set('firstTick', new Date());
    this.tick();
  },

  pause() {
    cancel(this.get('nextTick'));
    this.set('nextTick', null);
  },

  reset() {
    if (this.get('nextTick')) {
      this.pause();
    }

    this.setProperties({
      firstTick: null,
      lastTick: null
    })
  },

  tick() {
    this.set('lastTick', new Date());
    this.set('nextTick', later(this, this.tick, 1000))
  },

  _format(value) {
    return padStart(Math.round(value).toString(), 2, '0')
  }
});
