import TodoList from '../domain/TodoList';
import Notificator from '../lib/Notificator';

export default class {
    constructor () {
        this.todoList = new TodoList();

        // Events
        this.todoStateChanged = new Notificator();// TodoのStateが変わったEvent
        this.todoAddComleted = new Notificator();// Todoを追加したEvent
        this.todoSaved = new Notificator();// Todoを保存したEvent
    }

    toggleTodoState (no) {
        this.todoList.toggleTodoState(no);
        this.todoStateChanged.notify();
        this.saveTodo();
    }

    addTodo (desc) {
        this.todoList.add(desc);
        this.todoAddComleted.notify();
        this.saveTodo();
    }

    saveTodo () {
        this.todoList.save();
        this.todoSaved.notify();
    }

    loadTodo () {
        this.todoList.load();
    }
}
