
import { Router } from 'express'
const router = Router();

import * as escuela from '../controllers/escuela.controller'



router.post('/crearescuela',escuela.crear_escuela);
router.get('/getescuelaid/:id',escuela.listar_escuelaid);
router.get('/getescuela',escuela.listar_escuela);
router.put('/modescuela',escuela.modificar_escuela);
router.delete('/eliminarescuela/:id',escuela.eliminar_escuela);
router.get('/getescuelaalumno/:id',escuela.listar_escuelaalumno);

module.exports = router;