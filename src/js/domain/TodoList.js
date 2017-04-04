import Storage from '../infrastructure/Storage';
import Todo from './Todo';

export default class {

    constructor () {
        this.todos = [];

        this.storage = new Storage();
    }

    getTodo (no) {
        return this.todos.find(function (e) {
            return e.no === no;
        });
    }

    toggleTodoState (no) {
        this.getTodo(no).toggleState();
    }

    add (desc) {
        const newNo = this.todos.length + 1;
        this.todos.push(new Todo(newNo, desc));
    }

    save () {
        this.storage.save(this.todos);
    }

    load () {
        const loadedTodos = this.storage.load();
        // arrayのtodoがあるはず
        for (const index in loadedTodos) {
            const t = loadedTodos[index];
            console.info(index + ':', t);
            this.todos.push(new Todo(t._no, t._desc, t._state));
        }
    }
}
