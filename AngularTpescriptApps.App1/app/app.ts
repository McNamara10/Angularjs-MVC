
module app {

    class Config {
        constructor($routeProvider: ng.route.IRouteProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: "app/components/home/home.html",
                    controller: "HomeController"
                })
                .when("/utenti", {
                    templateUrl: "app/components/utenti/utenti.html",
                    controller: "UtentiController"
                })
                .when("/contabilita", {
                    templateUrl: "app/components/contabilita/contabilita.html",
                    controller: "ContabilitaController"
                })
                .when("/post", {
                    templateUrl: "app/components/post/post.html",
                    controller: "PostController"
                })
                .otherwise({ redirectTo: '/' });
        }

    }

    Config.$inject = ['$routeProvider'];
    var mainApp = angular.module('app', ['ngRoute']);
    mainApp.config(Config);



}
    // angular mental context
    /*angular.module('app', []);
       angular.module('app').config(Config);
       angular.module('app').controller('HomeController', HomeController);*/




