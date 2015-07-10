import Ember from 'ember';

export default Ember.Route.extend({


  setupController: function(controller, model){

    this.store.find('cohort', model.id).then(function(cohort){
      controller.set("cohort", cohort);
    });

    controller.set("model", this.store.createRecord('project'));

  },

  actions: {
    createProject: function(){

      let route = this;

      var project = this.controller.get('model');
      project.set("cohort", this.controller.get("cohort"));

      project.save()
        .then(function(project){
          route.transitionTo("project.show", project);
        })
        .catch(function(failure){
          route.controller.set("errorMessage", failure.errors[0].detail)
        });


    }
  }

});
