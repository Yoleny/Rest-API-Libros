import {db} from '../db/conn.js';

const getCategoria  = async(req, res)=>{

    const sql = `select * from tbl_categoria`;

    const result = await db.query(sql);
   
    res.json(result);

}

const postCategoria = async (req, res)=>{

    const {nombre}  = req.body;
    const params = [nombre];
    const sql = `insert into tbl_categoria
    values 
    ($1) returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}

const putCategoria = async (req, res)=>{

    const { nombre } = req.body;
    const {id} = req.params;
    
    const params = [nombre, id];

    const sql = `update tbl_categoria
    set nombre = $1
    where id = $2
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}

const deleteCategoria = async (req, res)=>{

    const {id} = req.params;
    const params = [ id];

    const sql = `delete from tbl_categoria
    where id = $1
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);
}

export {getCategoria , postCategoria , putCategoria , deleteCategoria }