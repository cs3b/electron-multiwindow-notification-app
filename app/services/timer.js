import Ember from 'ember';
import { padStart } from 'lodash/string';

const {
  computed,
  computed: { notEmpty },
  run: {cancel, later},
  inject: { service }
} = Ember;

export default Ember.Service.extend({
  ipcRenderer: service(),
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
    this._start(new Date());
    this.get('ipcRenderer').setFirstTick(this.get('firstTick'));
  },

  // specific for ipc callback
  syncStart(date) {
    this._start(date);
  },

  pause() {
    cancel(this.get('nextTick'));
    this.set('nextTick', null);
    this.get('ipcRenderer').setLastTick(this.get('lastTick'));
  },

  // specific for ipc callback
  syncPause(date) {
    this._pause();
    this.set('lastTick', date);
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
    return padStart(Math.round(value), 2, '0')
  },

  _start(date) {
    this.reset();
    this.set('firstTick', date);
    this.tick();
  },
  _pause() {
    cancel(this.get('nextTick'));
    this.set('nextTick', null);
  }
});
