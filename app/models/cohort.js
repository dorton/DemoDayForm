import DS from 'ember-data';

export default DS.Model.extend({
  demo_day_date: DS.attr("string"),
  city: DS.attr("string"),
  display_name: DS.attr('string'),
  projects: DS.hasMany('project', { async: true })
});
