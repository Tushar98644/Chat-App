import express from 'express';
import { LoginUser, RegisterUser } from '../controller/Usercontroller';

const router = express.Router();

// router.post('/',RegisterUser);
router.route('/').post(RegisterUser);
// router.post('/login',LoginUser);

export default router;