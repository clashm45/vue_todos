<style>
</style>
<template>
    <tr>
        <td>
            {{todo.no}}
        </td>
        <td>
            {{todo.taskDescription}}
        </td>
        <td>
            <a class="waves-effect waves-light btn"
                :class="[todo.state ? 'orange': 'tea']"
                @click="toggleTodo(no)">
                done!
            </a>
        </td>
    </tr>
</template>
<script>
    import Base from '../Base';

    export default {
        mixins: [Base],

        props: ['no'],

        created() {
            console.log("todo created");

            this.subscriptions.push(
                this.usecase.todoStateChanged.subscribe(() => {
                    this.todo = Object.assign({}, this.usecase.todoList.getTodo(no))
                })
            );
        },


        data() {
            return {
                todo: Object.assign({}, this.usecase.todoList.getTodo(no))
            }
        },

        methods: {
            toggleTodo(no) {
                this.usecase.toggleTodoState(no);
            }
        }
    }