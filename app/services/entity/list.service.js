'use strict';

module.exports = angular
    .module('services.entity')
    .factory('List', ListService);

ListService.$inject = ['$http'];
function ListService($http) {
    var service = {
        getAll:getAll
    };

    return service;

    ////////////////
    function getAll() {
        return $http.get('/api/list');
    }
}