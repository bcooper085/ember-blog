import Ember from 'ember';

var beans = [{
    id: 1,
    owner: "Jeff Stitches",
    category: "Roasting",
    body: "Why are my beans green?",
    image: "http://wellnesspulse.com/wp-content/uploads/2013/10/Green-Coffee-Beans-54655.jpg",
}, {
    id: 2,
    owner: "Rob Stitches",
    category: "Roasting",
    body: "Those are green beans bro.",
    image: "",
}]

export default Ember.Route.extend({
    model() {
        return beans;
    }
});
