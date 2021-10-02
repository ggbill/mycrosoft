import { Request, Response } from 'express';

const router = require('express').Router();

router.get('/test', async (request: Request, response: Response) => {
  response.json({result: "it worked"});
})

export default router;