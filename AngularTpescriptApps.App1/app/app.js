var app;
(function (app) {
    var Config = /** @class */ (function () {
        function Config($routeProvider) {
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
        return Config;
    }());
    Config.$inject = ['$routeProvider'];
    var mainApp = angular.module('app', ['ngRoute']);
    mainApp.config(Config);
})(app || (app = {}));
// angular mental context
/*angular.module('app', []);
   angular.module('app').config(Config);
   angular.module('app').controller('HomeController', HomeController);*/
//# sourceMappingURL=app.js.map