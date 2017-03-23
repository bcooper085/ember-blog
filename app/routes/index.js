import Ember from 'ember';

export default Ember.Route.extend({
    model() {
      return Ember.RSVP.hash({
        beans: this.store.findAll('bean'),
        comments: this.store.findAll('comment')
      });
    },

    actions: {
        saveBean(params) {
            var newBean = this.store.createRecord('bean', params);
            newBean.save();
            this.transitionTo('index');
        },

        saveComment(params) {
            var newComment = this.store.createRecord('comment', params);
            newComment.save();
            this.transitionTo('index');
        },

        editBean(bean, params) {
            Object.keys(params).forEach(function(key) {
                if(params[key]!==undefined) {
                    bean.set(key,params[key]);
                }
            });
            bean.save();
            this.transitionTo('index');
        },

        // editComment(comment, params) {
        //     Object.keys(params).forEach(function(key) {
        //         if(params[key]!==undefined) {
        //             comment.set(key,params[key]);
        //         }
        //     });
        //     comment.save();
        //     this.transitionTo('index');
        // },

        destroyBean(bean) {
            bean.destroyRecord();
            this.transitionTo('index');
        }

        // destroyComment(comment) {
        //     comment.destroyRecord();
        //     this.transitionTo('index');
        // }
    }
});
