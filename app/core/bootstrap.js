/*jshint browser:true */
'use strict';
require('./vendor')();

var appModule = require('../index');

var servicesModules = require.context('../services', true, /.module.js$/);
servicesModules.keys().forEach(servicesModules);

var services = require.context('../services', true, /.js$/);
services.keys().forEach(services);

var directives = require.context('../directives', true, /.module.js$/);
directives.keys().forEach(directives);

var filters = require.context('../filters', true, /.module.js$/);
filters.keys().forEach(filters);

var controllersModules = require.context('../controllers', true, /.module.js$/);
controllersModules.keys().forEach(controllersModules);

var controllers = require.context('../controllers', true, /.js$/);
controllers.keys().forEach(controllers);

// replaces ng-app="appName"
angular.element(document).ready(function () {
    angular.bootstrap(document, [appModule.name], {
        //strictDi: true
    });
});