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
                new Todo(1, 'wash'),//'顔を洗う'),
                new Todo(2, 'hige'),//'髭を剃る'),
                new Todo(3, 'breakfast'),//'朝飯を食べる'),
                new Todo(4, 'tooth'),//'歯を磨く'),
                new Todo(5, 'bag make'),//'荷物を確認する'),
            ];

            const usecase = new TodoListUsecase(initTodos);
            ServiceLocator.register('TodoListUsecase', usecase);
        }
    }
</script>