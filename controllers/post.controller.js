import { pool } from '../database'

export const crear_post=async(req,res)=>{
    try {
        const  {post}=req.body;
        const f= new Date();
        const response = await   pool.query('insert into posts(titulo,descripcion,fecha) values($1,$2,$3)',
         [post.titulo,post.descripcion, f]);
        return res.status(200).json(
            `Post registrado!`);
    } catch (e) {
        return res.status(500).json('Error Interno....!');
    }
}
export const listar_post=async(req,res)=>{
    try {
      
        const response = await   pool.query('select * from posts ');

        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error Interno....!');
    }
}
export const listar_post_id=async(req,res)=>{
    try {
        const  id=req.params.id;
        const response = await  pool.query('select * from posts where idpost=$1',[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error Interno....!');
    }
}
export const eliminar_post=async(req,res)=>{
    try {
        const  id = req.params.id;
        const response = await   pool.query('delete from posts where idpost = $1', [id]);
        return res.status(200).json(
            `  Post eliminado.`);
    } catch (e) {
        return res.status(500).json('Error Interno....!');
    }
}
export const modificar_post=async(req,res)=>{
    try {
        const  {post}=req.body;
        const response = await   pool.query(
            'update posts set titulo = $1 ,descripcion=$2 where idpost=$3',
             [post.titulo,post.descripcion,post.idpost]);
        return res.status(200).json(
            `Post ${post.titulo}  modificado correctamente...!`);
    } catch (e) {
        return res.status(500).json('Error Interno....!');
    }
}

