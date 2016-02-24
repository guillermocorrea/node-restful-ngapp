'use strict';

module.exports = angular
    .module('app.controllers')
    .controller('MainController', MainController);

MainController.$inject = ['List'];
function MainController(List) {
    var vm = this;
    vm.selected = null;
    vm.reset = reset;
    activate();

    ////////////////

    function activate() {
        List.getAll().then(function(res) {
            console.log(res);
            vm.values = res.data;
        });
    }

    function reset() {
        vm.selected = null;
    }
}