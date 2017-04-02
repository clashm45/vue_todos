export default class {

    constructor (todos) {
        this.todos = todos;
    }

    getTodo (no) {
        return this.todos.find(function (e) {
            return e.no === no;
        });
    }
}
