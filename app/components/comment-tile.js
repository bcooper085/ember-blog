import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(comment) {
        if (confirm('You sure you want to delete this comment?')) {
            this.sendAction('destroyComment', comment);
        }
    },
    editComment(comment, params) {
      this.sendAction('editComment', comment, params);
    },
  }
});
