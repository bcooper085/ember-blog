import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(bean) {
      if (confirm('Are you sure you want to delete this bean?')) {
        this.sendAction('destroyBean', bean);
      }
    }
  }
});
