import { Router } from 'express';
import { helloService } from '../services';

const router = Router();

router.get('/hello', helloService);

export default router;
