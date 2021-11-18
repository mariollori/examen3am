
import { Router } from 'express'
const router = Router();

import * as post from '../controllers/post.controller'

import { checkToken } from '../auth/checktoken';

router.post('/crearpost',post.crear_post);
router.get('/getpostid/:id',post.listar_post_id);
router.get('/getpost',post.listar_post);
router.put('/modpost',post.modificar_post);
router.delete('/eliminarpost/:id',post.eliminar_post);

module.exports = router;