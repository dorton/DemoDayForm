import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {



  this.resource('cohort', {path: "cohorts/:cohort_id"}, function(){
    this.route('register')
  });

  this.resource('project', {path: 'projects'}, function() {
    this.route('addstudent', {path: "/:id/addstudent"});
    this.route('show', {path: "/:id"} );
  });


});

export default Router;
