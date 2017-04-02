<style>
</style>
<template>
    <div class="row">
            <table class="striped">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Todo</th>
                        <th>done</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="todo in todos" :key="todo.no">
                        <td>
                            {{todo.no}}
                        </td>
                        <td>
                            {{todo.desc}}
                        </td>
                        <td>
                            <a class="waves-effect waves-light btn"
                                :class="[todo.state ? 'orange': 'tea', {'lighten-5': ! todo.state}]"
                                @click="toggleTodo(todo.no)">
                                done!
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
    </div>
</template>
<script>
    import Base from './Base';
    import Todo from './Todo.vue';

    export default {
        mixins: [Base],

        components: { Todo },

        created() {
            this.subscriptions.push(
                this.usecase.todoStateChanged.subscribe(() => {
                    this.todos = this.usecase.todoList.todos;
                })
            );
        },

        data() {
            return {
                todos: this.usecase.todoList.todos
            }
        },

        computed:{
        },

        methods: {
            toggleTodo(no) {
                this.usecase.toggleTodoState(no);
            }
        }
    }

</script>