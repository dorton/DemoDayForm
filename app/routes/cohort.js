import Ember from 'ember';

export default Ember.Route.extend({



  model: function(params){
    return this.store.find('cohort', params.cohort_id);
  },

  actions: {
    visitProject: function(project){
      this.transitionTo('project.show', project);
    }
  }

});
