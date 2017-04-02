<style scoped>
</style>
<template>
    <div>
        <div class="container">
            <todo-list></todo-list>
        </div>
    </div>
</template>
<script>
    import ServiceLocator from '../../usecase/UsecaseServiceLocator';
    import TodoList from './TodoList.vue';
    import TodoListUsecase from '../../usecase/TodoListUsecase';
    import Todo from '../../domain/Todo';

    export default {
        components: {
            TodoList
        },
        beforeCreate() {
            const initTodos = [
                new Todo(1, '顔を洗う'),
                new Todo(2, '髭を剃る'),
                new Todo(3, '朝飯を食べる'),
                new Todo(4, '歯を磨く'),
                new Todo(5, '荷物を確認する'),
            ];

            const usecase = new TodoListUsecase(initTodos);
            ServiceLocator.register('TodoListUsecase', usecase);
        }
    }
</script>