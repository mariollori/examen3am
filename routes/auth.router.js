
import { Router } from 'express'
const router = Router();

import * as auth from '../controllers/auth.controller'
router.post('/login',auth.login);
router.post('/crearuser',auth.crearusuario);



module.exports = router;