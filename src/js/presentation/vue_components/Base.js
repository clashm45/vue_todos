import ServiceLocator from '../../usecase/UsecaseServiceLocator';

export default {
    beforeCreate() {
        this.usecase = ServiceLocator.resolve("TodoListUsecase");
        this.subscriptions = [];
    },

    beforeDestroy() {
        for(const s of this.subscriptions){
            s.unsbscribe();
        }
    }
};