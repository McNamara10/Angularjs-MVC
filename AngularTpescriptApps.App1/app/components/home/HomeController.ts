module app {

    export class HomeController {
        constructor() {
            console.log('HomeController');
        }
    }
    angular.module('app').controller('HomeController', HomeController);
}