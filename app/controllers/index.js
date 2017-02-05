import Ember from 'ember';

const {
  inject: {service},
  computed: {alias}
} = Ember;

export default Ember.Controller.extend({
  lastMessage: service(),
  showMessage: alias('lastMessage.present')

});
