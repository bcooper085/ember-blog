/* eslint-env node */

module.exports = function(environment) {
    var ENV = {
        modulePrefix: 'coffee-blog',
        environment: environment,
        rootURL: '/',
        locationType: 'auto',
        EmberENV: {
            FEATURES: {
                // Here you can enable experimental features on an ember canary build
                // e.g. 'with-controller': true
            },
            EXTEND_PROTOTYPES: {
                // Prevent Ember Data from overriding Date.parse.
                Date: false
            }
        },

        firebase: {
            apiKey: "AIzaSyBJDUF_N5hhAr3DgVbF6GbSL6UVGL0OfPw",
            authDomain: "roasted-96e28.firebaseapp.com",
            databaseURL: "https://roasted-96e28.firebaseio.com",
            storageBucket: "roasted-96e28.appspot.com",
            messagingSenderId: "991923040266"
        },

        APP: {
            // Here you can pass flags/options to your application instance
            // when it is created
        }
    };

    if (environment === 'development') {
        // ENV.APP.LOG_RESOLVER = true;
        // ENV.APP.LOG_ACTIVE_GENERATION = true;
        // ENV.APP.LOG_TRANSITIONS = true;
        // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
        // ENV.APP.LOG_VIEW_LOOKUPS = true;
    }

    if (environment === 'test') {
        // Testem prefers this...
        ENV.locationType = 'none';

        // keep test console output quieter
        ENV.APP.LOG_ACTIVE_GENERATION = false;
        ENV.APP.LOG_VIEW_LOOKUPS = false;

        ENV.APP.rootElement = '#ember-testing';
    }

    if (environment === 'production') {

    }

    return ENV;
};
