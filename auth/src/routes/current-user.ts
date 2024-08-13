import express from 'express';

import { currentUser } from '@dinotickets/common';

const router = express.Router();

router.get('/api/user/currentuser', currentUser, (req, res) => {
  res.status(200).send({ currentUser: req.currentUser || null });
});

export { router as currentUserRouter };
