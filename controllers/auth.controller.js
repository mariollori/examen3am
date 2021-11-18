import { response } from 'express';
import { pool } from '../database';
const bcryptjs =require('bcryptjs')
const jwt = require('jsonwebtoken');

const secret = "ex4m3n-p4r614l-3";
const refreshTokenSecret = "ex4m3n-p4r614l-3-refresh-access-token";
export const login=async(req,res)=>{

    const {username,password} =req.body;
  

    try {
        const responesuser  = await pool.query('select * from usuario where username=$1 ',[username]);
       
        if(responesuser.rows.length!=0){
          
            const passold= responesuser.rows[0].password;
            
            if(await bcryptjs.compare(password,passold)){

                const usuario = {"idusuario":responesuser.rows[0].idusuario};
                const responserol  = await pool.query('select r.idrol, r.nombre  from rol r, usuario_rol ur  where  ur.idusuario=$1 and ur.idrol = r.idrol',[responesuser.rows[0].idusuario]);
 x    
                const roles = responserol.rows;
                const payload = { usuario, roles}
                const token = jwt.sign(payload,secret,{expiresIn:'60m'})
                return res.status(200).json({token})
            }else{
                return res.status(403).json({
                    message: 'Username o Password incorrectos...!',
                    passold,password
                });
            }
        }else{
            return res.status(500).json({ msg: 'Usuario o Contraseña invalidados'})
        }
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const crearusuario=async(req,res)=>{
    try {
      const { username, password} = req.body;
    
      
        const salt = await bcryptjs.genSalt(10);
        const hash = await bcryptjs.hash(password, salt);
        const response = await pool.query('insert into usuario(username, password) values($1, $2)', [username, hash])
       
        return res.status(200).json("Exito al crear el usuario");
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno....!');
    }
  }
  