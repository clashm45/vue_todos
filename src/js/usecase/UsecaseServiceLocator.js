export default {
    services: {},

    register(name, service) {
        this.services[name] = service;
    },

    resoleve(name) {
        return this.services[name];
    }
};