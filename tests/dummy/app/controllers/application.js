import Ember from 'ember';
import SparkPageControllerMixin from 'ember-sparks-web/mixins/spark-page-controller-mixin';

import styleClasses from 'ember-button-spark/components/button-spark/styles';

export default Ember.Controller.extend(SparkPageControllerMixin, {
  styleClasses,                                     
});

