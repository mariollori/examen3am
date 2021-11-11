
import { Router } from 'express'
const router = Router();

import * as alumno from '../controllers/alumno.controller'



router.post('/crearalum',alumno.crear_alumno);
router.get('/getalumid/:id',alumno.listar_alumnoid);
router.get('/getalum',alumno.listar_alumno);
router.put('/modalumno',alumno.modificar_alumno);
router.delete('/eliminaralum/:id',alumno.eliminar_alumno);


module.exports = router;