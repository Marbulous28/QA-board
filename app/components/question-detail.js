import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestions: Ember.inject.service(),
  actions: {
    addToFavorites(question){
      this.get("favoriteQuestions").add(question);
    }
  },
  answerNumber: Ember.computed('question.answers.length', function() {
    return this.get('question.answers.length');
  })
});
