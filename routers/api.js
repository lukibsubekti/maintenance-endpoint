import { Router } from 'express';

const router = Router();

router.all('*', (req, res, next) => {
  res.contentType('application/json');
  res.status(200).json({
    data: null,
    message: 'This site is under maintenance.'
  });
});

export default router;