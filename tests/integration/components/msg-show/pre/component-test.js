import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('msg-show/pre', 'Integration | Component | msg show/pre', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{msg-show/pre}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#msg-show/pre}}
      template block text
    {{/msg-show/pre}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
