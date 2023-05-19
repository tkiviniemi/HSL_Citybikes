import express from 'express';

const journeysRouter = express.Router();

journeysRouter.get('/', (req, res) => {
  res.send('OK');
});

export default journeysRouter;
