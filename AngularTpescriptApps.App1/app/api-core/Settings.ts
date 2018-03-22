
export interface ISettingApi {
   
    // Parameters
        Server: any;
        ApiUrl: string;
        ServerWithApiUrl: any;
    }

    export class SettingApi implements ISettingApi {
        public Server: any;
        public ApiUrl: string;
        public ServerWithApiUrl: any;
       

        constructor(settingapi: ISettingApi) {
            this.Server = "http://www.maceratae.it/magazine/";
            this.ApiUrl = "wp-json/wp/v2/";
            this.ServerWithApiUrl = this.Server + this.ApiUrl;
        }
    }
