import TodoList from '../domain/TodoList';
import Notificator from '../lib/Notificator';
import Todo from '../domain/Todo';

export default class {
    constructor (todos) {
        this.todoList = new TodoList(todos);

        // Events
        this.todoStateChanged = new Notificator();
        this.todoAddComleted = new Notificator();
    }

    toggleTodoState (no) {
        this.todoList.getTodo(no).toggleState();
        this.todoStateChanged.notify();
    }

    addTodo(desc) {
        const newNo = this.todoList.todos.length + 1;
        this.todoList.todos.push(new Todo(newNo, desc));
        this.todoAddComleted.notify();
    }
}
