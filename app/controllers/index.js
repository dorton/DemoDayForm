import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['city'],
  city: null,

  allCities: function(){

    return this.get('model').mapBy('city').uniq();

  }.property('model'),


  filteredCohorts: function() {
    var city = this.get('city');
    var cohorts = this.get('model');

    if (city) {
      return cohorts.filterBy('city', city);
    } else {
      return cohorts;
    }
  }.property('city', 'model'),




});
