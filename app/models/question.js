import DS from 'ember-data';

export default DS.Model.extend({
    user: DS.attr(),
    questionText: DS.attr(),
    note: DS.attr(),
});
