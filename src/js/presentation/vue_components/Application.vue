<style scoped>
</style>
<template>
    <div>
        <navigation></navigation>
        <div class="container">
            <todo-list></todo-list>
            <todo-form></todo-form>
            <options></options>
        </div>
    </div>
</template>
<script>
    import ServiceLocator from '../../usecase/UsecaseServiceLocator';
    import Navigation from './Navigation.vue';
    import TodoList from './TodoList.vue';
    import TodoForm from './TodoForm.vue';
    import Options from './Options.vue';
    import TodoListUsecase from '../../usecase/TodoListUsecase';
    import Todo from '../../domain/Todo';

    export default {
        components: {
            Navigation,
            TodoList,
            TodoForm,
            Options
        },
        beforeCreate() {
            const usecase = new TodoListUsecase();
            usecase.loadTodo();
            ServiceLocator.register('TodoListUsecase', usecase);
        }
    }
</script>