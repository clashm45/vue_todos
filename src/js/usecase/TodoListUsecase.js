import TodoList from '../domain/TodoList';
import Options from '../domain/Options';
import Notificator from '../lib/Notificator';

export default class {
    constructor () {
        this.todoList = new TodoList();
        this.options = new Options();

        // Events
        this.todoStateChanged = new Notificator();// TodoのStateが変わったEvent
        this.todoAddComleted = new Notificator();// Todoを追加したEvent
        this.todoSaved = new Notificator();// Todoを保存したEvent
        this.changedFilteringFlag = new Notificator();// Filterを変更したEvent
        this.removeTodo = new Notificator();// Todoを削除したEvent
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

    toggleFilteringFlag() {
        this.options.toggleFilteringFlag();
        this.changedFilteringFlag.notify();
    }

    remove(no) {
        this.todoList.remove(no);
        this.removeTodo.notify();
        this.saveTodo();
    }
}
