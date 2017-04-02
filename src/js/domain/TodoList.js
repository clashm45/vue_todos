export default class {

    constructor (todos) {
        this._todos = todos;
    }

    getTodo (no) {
        return this._todos.find(function (e) {
            return e.no === no;
        });
    }
}
