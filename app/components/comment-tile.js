import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editComment(comment, params) {
      this.sendAction('editComment', comment, params);
    },
  }
});
