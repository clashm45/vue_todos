export default class {
    constructor (no, desc, state) {
        this._no = no;
        this._desc = desc;
        this._state = state ? state : false;
    }

    get no () {
        return this._no;
    }
    get desc () {
        return this._desc;
    }

    get state () {
        return this._state;
    }

    toggleState () {
        this._state = !this._state;
    }
}
