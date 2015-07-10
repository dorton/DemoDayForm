import Ember from 'ember';

export default Ember.Route.extend({

  model: function(){
    // return Ember.Object.create({
    //   name: "Jwo"
    // });

    return this.store.findAll('cohort');
  },


  actions: {
    assignCohort: function(cohort){
      this.controller.set("cohort", cohort);
      this.transitionTo("cohort", cohort);

    }
  }
});
