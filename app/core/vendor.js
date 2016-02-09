module.exports = function () {
    /* JS */
    window.jQuery = window.$ = require('../../node_modules/jquery/dist/jquery.min');
    require('jquery');
    require('bootstrap');
    require('angular');
    require('angular-ui-router');

    /* STYLES */
    require('../sass/styles.scss');
    require('../../node_modules/bootstrap/dist/css/bootstrap.min.css');
};