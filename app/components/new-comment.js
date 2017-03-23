import Ember from 'ember';

export default Ember.Component.extend({
  respondToPost: false,
  actions: {
      postComment: function() {
          this.set('respondToPost', true);
      },

      saveComment() {
          var params = {
              owner: this.get('owner'),
              body: this.get('body'),
              image: this.get('image'),
              bean: this.get('bean')
          };
          this.set('respondToPost', false);
          this.sendAction('saveComment', params);
      }
  }
});
