module app {

    export class UtentiController {
        constructor() {
            console.log('UtentiController');
        }
    }
    angular.module('app').controller('UtentiController', UtentiController);
}