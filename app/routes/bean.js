import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('bean', params.bean_id);
  },
  actions: {
  saveComment(params) {
    var newComment = this.store.createRecord('comment', params);
    var bean = params.bean;
    bean.get('comments').addObject(newComment);
    newComment.save().then(function() {
      return bean.save();
    });
    this.transitionTo('bean', bean);
  },
  destroyComment(comment) {
      comment.destroyRecord();
      this.transitionTo('index');
  },
  editComment(comment, params) {
      Object.keys(params).forEach(function(key) {
          if(params[key]!==undefined) {
              comment.set(key,params[key]);
          }
      });
      comment.save();
      this.transitionTo('index');
    }
  },
});
