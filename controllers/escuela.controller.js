import { pool } from '../database'

export const crear_escuela=async(req,res)=>{
    try {
        const  {escuela}=req.body;
        const response = await   pool.query('insert into escuela(escuela) values($1)',
         [escuela.escuela]);
        return res.status(200).json(
            `Se registro la escuela  correctamente...!`);
    } catch (e) {
        return res.status(500).json('Error Interno....!');
    }
}
export const listar_escuela=async(req,res)=>{
    try {
      
        const response = await   pool.query('select * from escuela ');

        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error Interno....!');
    }
}
export const listar_escuelaid=async(req,res)=>{
    try {
        const  id=req.params.id;
        const response = await  pool.query('select * from escuela where id_escuela=$1',[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error Interno....!');
    }
}
export const eliminar_escuela=async(req,res)=>{
    try {
        const  id = req.params.id;
        const response = await   pool.query('delete from escuela where id_escuela = $1', [id]);
        return res.status(200).json(
            `  La escuela  ha sido eliminado.`);
    } catch (e) {
        return res.status(500).json('Error Interno....!');
    }
}
export const modificar_escuela=async(req,res)=>{
    try {
        const  {escuela}=req.body;
        const response = await   pool.query(
            'update escuela set escuela = $1  where id_escuela=$2',
             [escuela.escuela,escuela.id_escuela]);
        return res.status(200).json(
            `La escuela  ha sido modificado correctamente...!`);
    } catch (e) {
        return res.status(500).json('Error Interno....!');
    }
}

export const listar_escuelaalumno=async(req,res)=>{
    try {
        const  id=req.params.id;
        const response = await  pool.query(`
        select a.id_alumno , a.nombres , a.apellidos 
        , a.direccion , a.telefono from alumnos a, 
        escuelas e where a.escuela_id= $1
        `,[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error Interno....!');
    }
}