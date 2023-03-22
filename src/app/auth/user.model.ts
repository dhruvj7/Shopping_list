export class User{
    constructor(
        public username: string ,
        public id :string,
        public _token:string, 
        public expirationTime : Date){
    }

    get token(){
        if(this._token == null || this.expirationTime < new Date()){
            return null;
        }
        return this._token;
    }
};

