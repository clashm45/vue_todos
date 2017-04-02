import TodoList from '../domain/TodoList';
import Notificator from '../lib/Notificator';

export default class {
    constructor (todos) {

        console.log("todolistUsecase constructor");

        this.todoList = new TodoList(todos);

        // Events
        this.todoStateChanged = new Notificator();
    }

    toggleTodoState (no) {
        this.todoList.getTodo(no).toggleState();
        this.todoStateChanged.notify();
    }
}
