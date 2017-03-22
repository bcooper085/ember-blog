import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('bean');
    },

    actions: {
        saveBean(params) {
            var newBean = this.store.createRecord('bean', params);
            newBean.save();
            this.transitionTo('index');
        },

        beanResponse(params) {
            var newResponse = this.store.createRecord('bean', params);
            newResponse.save();
            this.transitionTo('index');
        },

        destroyBean(bean) {
            bean.destroyRecord();
            this.transitionTo('index');
        }
    }
});
