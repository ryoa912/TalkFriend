import { Request, Response } from 'express'

export default function (req: Request, res: Response) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
        env: process.env.ENVIRONMENT
    }));
}