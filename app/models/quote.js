import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo(),
  body: DS.attr('string')
});