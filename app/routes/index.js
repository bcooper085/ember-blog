import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('bean');
    },

    actions: {
        destroyBean(bean) {
            bean.destroyRecord();
            this.transitionTo('index');
        }
    }
});
