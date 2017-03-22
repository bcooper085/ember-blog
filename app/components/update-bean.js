import Ember from 'ember';

export default Ember.Component.extend({
    updateBean: false,
    actions: {
        updateBean() {
            this.set('updateBean', true);
        },
        editBean(bean) {
            var params = {
                owner: this.get('owner'),
                category: this.get('category'),
                body: this.get('body'),
                image: this.get('image'),
            };
            this.set('updateBean', false);
            this.sendAction('editBean', bean, params);
        }
    }
});
