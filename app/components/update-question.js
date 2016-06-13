import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestion: false,
  actions: {
    updateQuestion() {
      this.set("updateQuestion", true);
    },
    update(question) {
      var params = {
        user: this.get('user'),
        questionText : this.get('questionText'),
        note: this.get('note'),
      };
      this.set('updateQuestion', false);
      this.sendAction('update', question, params);
    }
  }
});
