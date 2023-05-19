import express from 'express';

const stationsRouter = express.Router();

stationsRouter.get('/', (req, res) => {
  res.send('OK');
});

export default stationsRouter;
