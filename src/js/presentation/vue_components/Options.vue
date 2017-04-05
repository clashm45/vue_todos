<style>
</style>
<template>
    <div class="row">
        <div class="input-field">
            <input type="checkbox" class="filled-in" id="done-filtering-box"
                @change="toggleFilter" />
            <label for="done-filtering-box">Done Filtering</label>
        </div>
    </div>
</template>
<script>
    import Base from './Base';

    export default {
        mixins: [Base],

        created() {
            this.subscriptions.push(
                this.usecase.changedFilteringFlag.subscribe(() => {
                    this.filteringFlag = this.usecase.options.filteringFlag;
                })
            );
        },

        data() {
            return {
                filteringFlag: this.usecase.options.filteringFlag
            }
        },

        methods: {
            toggleFilter() {
                this.usecase.toggleFilteringFlag();
            }
        }
    }
</script>