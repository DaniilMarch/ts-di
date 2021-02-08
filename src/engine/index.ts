import express from 'express';
import config from '../config';
import ServiceRegistry from '../internal/ServiceRegistry';
import TimeService from '../services/TimeService';

export default class Engine {
    app?: express.Express;
    registry?: ServiceRegistry;

    constructor() {
        this.createExpressApp();
        this.configureServices();
    }

    createExpressApp(): void {
        this.app = express();
    }

    startScheduledScripts(): void {

    }

    configureServices(): void {
        this.registry = new ServiceRegistry();
        this.registry.addTransient(TimeService);
    }

    buildMiddleware(): void {

    }
}