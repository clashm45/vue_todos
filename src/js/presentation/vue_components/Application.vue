<style scoped>
</style>
<template>
    <div>
        <navigation></navigation>
        <div class="container">
            <todo-list></todo-list>
            <todo-form></todo-form>
        </div>
    </div>
</template>
<script>
    import ServiceLocator from '../../usecase/UsecaseServiceLocator';
    import Navigation from './Navigation.vue';
    import TodoList from './TodoList.vue';
    import TodoForm from './TodoForm.vue';
    import TodoListUsecase from '../../usecase/TodoListUsecase';
    import Todo from '../../domain/Todo';

    export default {
        components: {
            Navigation,
            TodoList,
            TodoForm
        },
        beforeCreate() {
            const initTodos = [
                new Todo(1, 'wash'),
                new Todo(2, 'hige'),
                new Todo(3, 'breakfast'),
                new Todo(4, 'tooth'),
                new Todo(5, 'bag make'),
            ];

            const usecase = new TodoListUsecase(initTodos);
            ServiceLocator.register('TodoListUsecase', usecase);
        }
    }
</script>