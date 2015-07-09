import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    cohort: function(cohort){
      console.log("Yo!");
      this.sendAction(cohort);
    }
  }
});
