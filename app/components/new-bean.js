import Ember from 'ember';

export default Ember.Component.extend({
    addNewBean: false,
    actions: {
        beanForm() {
            this.set('addNewBean', true);
        },

        saveBean() {
            var params = {
                owner: this.get('owner'),
                category: this.get('category'),
                body: this.get('body'),
                image: this.get('image'),
            };
            this.set('addNewBean', false);
            this.sendAction('saveBean', params);
        }
    }
});
