export class User {
    constructor(
        public email: string, 
        public id: string, 
        private _token: string, 
        private _tokenExpirationDate: Date
    ) {}

    get token() {  // special type of property where you can write code that runs when you try to access this property, can't reassign
        if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
            return null;
        }
        return this._token;
    }
}
