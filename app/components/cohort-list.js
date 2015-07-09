import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    cohort: function(theCohort){
      console.log("Yo!");
      // either send action to controller that cohort was set
      // OR  ... set cohort on applicationController
      this.sendAction();
    }
  }
});
