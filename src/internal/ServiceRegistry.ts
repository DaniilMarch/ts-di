import Service from './Service';

export default class ServiceRegistry {
    scopedRegistry: {[key: string]: Service};
    singletonRegistry: {[key: string]: Service};
    transientRegistry: {[key: string]: Service};

    constructor() {
        this.scopedRegistry = {};
        this.singletonRegistry = {};
        this.transientRegistry = {};
    }

    addTransient(service: Service): void {
        this.transientRegistry[service.name] = service;
    }

    addScoped(service: Service): void {
        this.scopedRegistry[service.name] = service;
    }

    addSingleton(service: Service): void {
        this.singletonRegistry[service.name] = service;
    }
}
