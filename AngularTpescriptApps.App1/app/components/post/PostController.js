"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PostController = /** @class */ (function () {
    function PostController($http) {
        this.$http = $http;
        this.httpService = $http;
    }
    PostController.prototype.getAllPost = function (successCallback) {
        this.httpService.get(this.ServerWithApiUrl + 'post').success(function (data, status) {
            successCallback(data);
            console.log(data);
        });
    };
    return PostController;
}());
angular.module("app").controller("PostController", PostController);
//# sourceMappingURL=PostController.js.map