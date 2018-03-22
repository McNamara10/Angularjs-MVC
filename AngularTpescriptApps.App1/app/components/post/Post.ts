export interface IPost {
    id: number;
    date: any;
    
}

class Post implements IPost {
    public id: number;
    public date: any;
   

    constructor(post: IPost) {
        this.id = post.id;
        this.date = post.date
    }
}