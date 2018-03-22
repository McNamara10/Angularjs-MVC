import { IPost } from './Post';
import { ISettingApi } from '../../api-core/Settings';

interface PostController extends IPost, ISettingApi {
    stores: any[];
    
    
}

class PostController {
    private httpService: any;
    constructor(private $http: any) {

        this.httpService = $http;

    }

    getAllPost(successCallback: Function): void {
        this.httpService.get(this.ServerWithApiUrl + 'post').success(function (data, status) {
            successCallback(data);
            console.log(data);
        });
    }  
   
}
        angular.module("app").controller("PostController", PostController as any);