<style>
    .desc {
        width: 350px;
    }
</style>
<template>
    <div class="row">
        <table class="highlight cols s12">
            <thead>
                <th>No.</th>
                <th>Task</th>
                <th>check</th>
                <th>delete</th>
            </thead>
            <tbody>
                <tr v-for="todo in todos" :key="todo.no">
                    <td>
                        {{todo.no}}
                    </td>
                    <td class="desc">
                        {{todo.desc}}
                    </td>
                    <td>
                        <a class="waves-effect waves-light btn"
                            :class="[todo.state ? 'orange': 'tea', {'lighten-5': ! todo.state}]"
                            @click="toggleTodo(todo.no)">
                            done!
                        </a>
                    </td>
                    <td>
                        <a class="waves-effect waves-light btn red"
                            @click="removeTodo(todo.no)">
                            remove
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    import Base from './Base';

    export default {
        mixins: [Base],

        created() {
            this.subscriptions.push(
                this.usecase.todoStateChanged.subscribe(() => {
                    this.todos = this.filterDoneTask();
                })
            );

            this.subscriptions.push(
                this.usecase.todoSaved.subscribe(() => {
                    Materialize.toast('Save!', 4000);
                })
            );

            this.subscriptions.push(
                this.usecase.todoAddComleted.subscribe(() => {
                    this.todos = this.filterDoneTask();
                })
            );

            this.subscriptions.push(
                this.usecase.changedFilteringFlag.subscribe(() => {
                    this.todos = this.filterDoneTask();
                })
            );

            this.subscriptions.push(
                this.usecase.removeTodo.subscribe(() => {
                    this.todos = this.filterDoneTask();
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
            },

            filterDoneTask() {
                const flag = this.usecase.options.filteringFlag;
                if(flag === true) {
                    return this.usecase.todoList.todos.filter(el => el.state === false);
                }
                return this.usecase.todoList.todos;
            },

            removeTodo(no) {
                this.usecase.remove(no);
            }
        }
    }

</script>