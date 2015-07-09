import Ember from 'ember';

export default Ember.Route.extend({

  model: function(){
    // return Ember.Object.create({
    //   name: "Jwo"
    // });

    return this.store.findAll('cohort');
  }
});
