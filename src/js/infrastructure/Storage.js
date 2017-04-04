export default class {

    constructor () {
        this._key = 'vuetodo';
    }

    save (obj) {
        if (window.localStorage) {
            const val = JSON.stringify(obj);
            console.log('save localStorage', val);
            window.localStorage.setItem(this._key, val);
        }
    }

    load () {
        if (window.localStorage) {
            const val = window.localStorage.getItem(this._key);
            console.log('load localStorage', val);
            return JSON.parse(val);
        }
    }
}
