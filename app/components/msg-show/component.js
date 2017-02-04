import Ember from 'ember';
const {
  inject: {service},
  computed,
  computed: {alias}
} = Ember;
export default Ember.Component.extend({
  lastMessage: service(),
  show: alias('lastMessage.present'),
  messages: computed('lastMessage.msg.{numberPresent,comment}', function () {
    let {numberPresent, numberListening, comment} = this.get('lastMessage.msg');
    return [
      {text: numberPresent, suffix: 'obecnych', icon: 'person', component: 'msg-show/people'},
      {text: numberListening, suffix: 'słuchających', icon: 'phone', component: 'msg-show/people'},
      {text: comment, component: 'msg-show/pre'},
    ];
  })
});
