import DS from 'ember-data';

export default DS.Model.extend({
  owner: DS.attr(),
  body: DS.attr(),
  image: DS.attr(),
});
