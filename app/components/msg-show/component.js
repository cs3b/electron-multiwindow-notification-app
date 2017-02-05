import Ember from 'ember';
const {
  inject: {service},
  computed,
  computed: {alias}
} = Ember;
export default Ember.Component.extend({
  lastMessage: service(),
  show: alias('lastMessage.present'),
  messages: computed('lastMessage.msg.{numberPresent,numberListening,lastDuration,comment}', function () {
    let {numberPresent, numberListening, lastDuration, comment} = this.get('lastMessage.msg');
    console.log(lastDuration);
    return [
      {text: numberPresent, suffix: 'obecnych', icon: 'person', component: 'msg-show/people'},
      {text: numberListening, suffix: 'przez łącza tel.', icon: 'phone', component: 'msg-show/people'},
      {text: lastDuration, icon: 'timer', component: 'msg-show/time'},
      {text: comment, component: 'msg-show/pre'},
    ];
  })
});
