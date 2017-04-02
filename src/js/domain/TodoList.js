export default class {

    constructor (todos) {
        this.todos = todos;

        console.log("domain todolist created " + this.todos.length);
    }



    getTodo (no) {
        console.log("domain todolist getTodo("+no+")");
        return this.todos.find(function (e) {
            return e.no === no;
        });
    }
}
