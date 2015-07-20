import Ember from 'ember';

export default Ember.Route.extend({

  queryParams: {
    city: {
      replace: true
    }
  },


  model: function(){
    // return Ember.Object.create({
    //   name: "Jwo"
    // });

    return this.store.findAll('cohort').then(function(cohorts) { return cohorts.sortBy('city'); });
  },


  actions: {
    assignCohort: function(cohort){
      this.controller.set("cohort", cohort);
      this.transitionTo("cohort", cohort);
    },

    allCities: function(){
      Ember.$(".cityFilter .md-button").removeClass("md-primary");
      this.transitionTo({queryParams: {city: null}});
    },

    filterByCity: function(city){
      Ember.$(".cityFilter .md-button").removeClass("md-primary");
      Ember.$(".cityFilter #filter-by-" + city + " .md-button").addClass("md-primary");

      this.transitionTo({queryParams: {city: city}});
    }
  }
});
