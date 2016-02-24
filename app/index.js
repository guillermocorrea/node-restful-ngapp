'use strict';
//require('./services/entity/services.entity.module.js');
//require('./controllers/controllers.module.js');

var faker = require('faker');

module.exports = angular.module('app', [
    /* App modules */
    'app.controllers',

    /* Vendors */
    'ui.router',
    'ngMockE2E',
    'ui.select',
    'ngSanitize'
]);

angular.module('app')
    .run(runApp);

runApp.$inject = ['$httpBackend'];

function runApp($httpBackend) {
    $httpBackend.whenGET('/api/list').respond(responseGetList);

    function responseGetList() {
        console.log('responseGetList');
        var data = [];
        for (var i = 0; i < 100; i++) {
            data.push({id: i, name: faker.fake('{{company.companyName}}')});
        }

        return [200, data];
    }
}