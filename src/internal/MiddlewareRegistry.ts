import Middleware from './Middleware';

export default class MiddlewareRegistry {
    pipeline: Middleware[];
    constructor() {
        this.pipeline = [];
    }

    addMiddleware(middleware: Middleware): void {
        this.pipeline.push(middleware);
    }

    getPipeline(): Middleware[] {
        return this.pipeline;
    }
}