import DS from 'ember-data';

export default DS.Model.extend({

  app_name: DS.attr('string'),
  rationale: DS.attr('string'),
  tech_used: DS.attr('string'),
  app_url: DS.attr('string'),
  cohort: DS.belongsTo('cohort', { async: true }),
  students: DS.hasMany('student', {async: true})
});
