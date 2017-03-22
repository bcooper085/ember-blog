import Ember from 'ember';

export default Ember.Component.extend({
    respondToPost: false,
    actions: {
        postResponse: function() {
            this.set('respondToPost', true);
        },
        delete(bean) {
            if (confirm('You sure you want to delete this bean?')) {
                this.sendAction('destroyBean', bean);
            }
        }
    }
});
