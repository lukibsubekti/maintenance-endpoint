import { Router } from 'express';

const router = Router();

router.all('*', (req, res, next) => {
  res.contentType('text/html');
  res.render('index');
});

export default router;