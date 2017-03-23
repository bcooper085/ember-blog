import Ember from 'ember';

export default Ember.Component.extend({
  updateComment: false,
  actions: {
    updateComment() {
      this.set('updateComment', true);
    },
    editComment(comment) {
      var params = {
        owner: this.get('owner'),
        body: this.get('body'),
        image: this.get('image'),
      };
      this.set('updateComment', false);
      this.sendAction('editComment', comment, params);
    }
  }
});
