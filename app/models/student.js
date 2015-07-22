import DS from 'ember-data';

export default DS.Model.extend({

  name: DS.attr('string'),
  github_url: DS.attr('string'),
  email: DS.attr('string'),
  portfolio_url: DS.attr('string'),
  profile_pic_link: DS.attr('string'),
  course: DS.attr('string'),
  // bio: DS.attr('string'),
  project: DS.belongsTo('project', { async: true }),



});
