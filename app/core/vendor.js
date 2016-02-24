module.exports = function () {
    /* JS */
    window.jQuery = window.$ = require('../../node_modules/jquery/dist/jquery.min');
    require('jquery');
    require('bootstrap');
    require('angular');
    require('angular-mocks');
    require('angular-ui-router');
    require('../../node_modules/angular-ui-select/select.js');
    require('angular-sanitize');
    require('faker');

    /* STYLES */
    require('../sass/styles.scss');
    require('../../node_modules/bootstrap/dist/css/bootstrap.min.css');
    require('../../node_modules/angular-ui-select/select.min.css');
};