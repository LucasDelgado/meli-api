import { Request, Response } from 'express';
/**
 * Error handler middleware
 * primero pasa logErrors, donde se podria logear en un servicio externo.
 * luego pasa errorHanlder, donde se ejeucta el error.
 */

function logErrors(err: any, req: Request, res: Response, next: any) {
    console.error(err);
    next(err);
}

function errorHanlder(err: any, req: Request, res: Response, next: any) {
    let status = err?.response?.status || 500;
    res.status(status).json({
        mess: err.message,
    });
}

export default { logErrors, errorHanlder };
