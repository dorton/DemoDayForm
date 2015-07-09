import Ember from 'ember';

export default Ember.Controller.extend({

  cohort: null,

  demo: {
   isOpen: true,
   count: 0,
   selectedAlignment: 'md-left'
 },

 actions: {
   assignCohort: function(cohort){
     console.log("Yo from controller");
     this.set("cohort", cohort);
   }
 }

});
