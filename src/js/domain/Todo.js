export default class {
    constructor(no, desc) {
        this._no = no;
        this._desc = desc;
        this._state = false;
    }

    get getNo() {
        return this._no;
    }
    get getTaskDescription() {
        return this._desc;
    }

    toggleState() {
        this._state = ! this._state;
    }
}