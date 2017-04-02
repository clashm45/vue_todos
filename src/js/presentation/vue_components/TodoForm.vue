<style>
</style>
<template>
    <div class="row">
        <div class="input-field col s6">
            <input id="new-task" v-model="newTodo" type="text" class="validate" data-length="20">
            <label class="active" for="new-task">New Task</label>
        </div>
        <div class="col s4">
            <a class="waves-effect waves-light btn-floating btn-large"
                @click="addTodo()">
                <i class="material-icons">add</i>
            </a>
        </div>
    </div>
</template>
<script>
    import Base from './Base';

    export default {
        mixins: [Base],

        created() {
            this.subscriptions.push(
                this.usecase.todoAddComleted.subscribe(() => {
                    this.newTodo = '';
                })
            );
        },

        data() {
            return {
                newTodo: ''
            }
        },

        computed:{
        },

        methods: {
            addTodo() {
                if(!this.newTodo) return;
                this.usecase.addTodo(this.newTodo);
            }
        }
    }

</script>
