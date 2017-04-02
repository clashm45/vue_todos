<style>
</style>
<template>
    <tr>
        <td>
            {{no}}
        </td>
        <td>
            {{todo.desc}}
        </td>
        <td>
            <a class="waves-effect waves-light btn"
                :class="[todo.state ? 'orange': 'tea']"
                @click="toggleTodo()">
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
            this.todo = Object.assign({}, this.usecase.todoList.getTodo(no))

            this.subscriptions.push(
                this.usecase.todoStateChanged.subscribe(() => {
                    this.todo = Object.assign({}, this.usecase.todoList.getTodo(no))
                })
            );
        },

        computed: {
            
        },

        data() {

            console.log("this.no = " + no);

            return {
                todo: Object.assign({}, this.usecase.todoList.getTodo(no))
            }
        },

        methods: {
            toggleTodo() {
                this.usecase.toggleTodoState(no);
            }
        }
    }