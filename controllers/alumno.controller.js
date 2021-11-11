import { pool } from '../database'


export const crear_alumno=async(req,res)=>{
    try {
        const  {alumno}=req.body;
        const response = await   pool.query('insert into alumno(nombres,apellidos,direccion,telefono,escuela_id) values($1,$2,$3,$4,$5)',
         [alumno.nombres,alumno.apellidos,alumno.direccion,alumno.telefono,alumno.escuela_id]);
        return res.status(200).json(
            `El alumno   ${alumno.nombres } ha sido registrado correctamente...!`);
    } catch (e) {
        
        return res.status(500).json('Error Interno....!');
    }
}
export const listar_alumno=async(req,res)=>{
    try {
      
        const response = await   pool.query('select * from alumno ');

        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error Interno....!');
    }
}
export const listar_alumnoid=async(req,res)=>{
    try {
        const  id=req.params.id;
        const response = await  pool.query('select * from alumno where id_alumno=$1',[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error Interno....!');
    }
}
export const eliminar_alumno=async(req,res)=>{
    try {
        const  id = req.params.id;
        const response = await   pool.query('delete from alumno where id_alumno = $1', [id]);
        return res.status(200).json(
            `El alumno ha sido eliminado.`);
    } catch (e) {
        return res.status(500).json('Error Interno....!');
    }
}
export const modificar_alumno=async(req,res)=>{
    try {
        const  {alumno}=req.body;
        const response = await   pool.query(
            'update alumno set nombres = $1,apellidos =$2,direccion=$3,telefono=$4,escuela_id=$5 where id_alumno=$6',
             [alumno.nombres,alumno.apellidos,alumno.direccion,alumno.telefono,alumno.escuela_id,alumno.id_alumno]);
        return res.status(200).json(
            `El alumno   ${alumno.nombres } ha sido modificado correctamente...!`);
    } catch (e) {
        return res.status(500).json('Error Interno....!');
    }
}