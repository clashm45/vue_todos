<style>
</style>
<template>
    <div class="row">
        <table>
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Todo</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <div v-for="todo in todos">
                    <tr>
                        <td><p>{{ todo.no }}</p></td>
                        <td><p>{{ todo.desc }}</p></td>
                    </tr>
                    
                </div>
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
            console.log("todolist created");
        },

        data() {
            return {
                todos: this.usecase.todoList.todos
            }
        },

        computed:{
        },

        methods: {
        }
    }

</script>