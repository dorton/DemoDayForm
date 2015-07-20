import Ember from 'ember';

export default Ember.Route.extend({

  setupController: function(controller, model){

    this.store.find('project', model.id).then(function(project){
      controller.set("project", project);
    });

    controller.set("model", this.store.createRecord('student'));

  },

  deactivate: function() {
    this.controller.set("errorMessage", null);
    // this.controller.get('model').deleteRecord();
  },


  actions: {

    setCourse: function(course){

      Ember.$(".courseSelection .md-button").removeClass("md-primary");
      Ember.$(".courseSelection .md-button." + course).addClass("md-primary");

      let dictionary = {
        "rails": "Rails Engineering",
        "web": "Web Design",
        "front-end": "Front End Engineering",
        "mobile": "Mobile Engineering",
        "python": "Python Data Engineering",
      }

      this.controller.get("model").set("course", dictionary[course]);

    },


    addStudent: function(){

      let route = this;

      var student = this.controller.get('model');
      student.set("project", this.controller.get("project"));

      student.save()
        .then(function(student){
          route.transitionTo("project.show", route.controller.get("project"));
        })
        .catch(function(failure){

          route.controller.set("errorMessage", failure.errors[0].detail)

        });

    }
  }

});
