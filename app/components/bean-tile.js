import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        delete(bean) {
            if (confirm('You sure you want to delete this bean?')) {
                this.sendAction('destroyBean', bean);
            }
        },
        editBean(bean, params) {
            this.sendAction('editBean', bean, params);
        },
        
    }
});
