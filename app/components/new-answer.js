import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },

    postAnswer() {
      var params = {
        answerUser: this.get('answerUser'),
        answerText: this.get('answerText'),
        question: this.get('question')
      };
      this.set("addNewAnswer", false);
      this.sendAction('postAnswer', params);
    }
  }
});
