import Ember from 'ember';

export default Ember.Component.extend({
    respondToPost: false,
    actions: {
        postResponse: function() {
            this.set('respondToPost', true);
        }
    }
});
