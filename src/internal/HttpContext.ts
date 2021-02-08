import express from 'express';
import ServiceRegistry from './ServiceRegistry'

export default class HttpContext {
    request: express.Request;
    response: express.Response;
    next: express.NextFunction;
    serviceRegistry: ServiceRegistry;

    constructor(request: express.Request, response: express.Response, next: express.NextFunction, serviceRegistry: ServiceRegistry) {
        this.request = request;
        this.response = response;
        this.next = next;
        this.serviceRegistry = serviceRegistry
    }
}
