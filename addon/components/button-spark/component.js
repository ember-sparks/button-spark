import Ember from 'ember';
import layout from './template';
import styles from './styles';

import SparkComponent from 'ember-sparks/components/spark-component';

const {
  computed,
} = Ember;

const ButtonComponent = SparkComponent.extend({
  layout,
  styles,

  // @public
  label: '',
  loading: false,
  disabled: false,
  loadingComponent: "button-spark/loading-indicator",

  _isDisabled: computed('disabled', 'loading', function() {
    let disabled = this.get('disabled');
    let loading  = this.get('loading');

    return disabled || loading;
  }),

  actions: {

    onClick() {
      this.sendAction('onClick', ...arguments);
    },

  },

});

ButtonComponent.reopenClass({
  positionalParams: ['label'],
});

export default ButtonComponent;

