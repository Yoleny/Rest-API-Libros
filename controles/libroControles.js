import {db} from '../db/conn.js'

const getLibro = async (req,res)=>{

    const sql = `select * from tbl_libro order by id`;
    const result = await db.query(sql);
    res.json(result)

}

const postLibro = async (req, res)=>{


    const { nombre , autor, genero, paginas } = req.body;

    const params =  [nombre, autor, genero, paginas ];

    const sql = `insert into tbl_libro
                (nombre, autor, genero, paginas )
                values 
                ($1, $2, &3, &4 ) returning * `

    const result = await db.query(sql , params);

    res.json(result);
    
}

const putLibro = async (req, res)=>{

    const {nombre , autor, genero, paginas} = req.body
    const {id} =req.params

    const params = [
        nombre, 
        autor,
        genero,
        paginas,
        id
    ]

    const sql = `update tbl_libro
                  set
                   nombre = $1, 
                   autor = $2,
                   genero = &3,
                   paginas = &4
                where id = $5 returning *`

    const result = await db.query(sql, params)

    res.json(result);

}

const deleteLibro = async (req, res)=>{

    const params = [req.params.id];

    const sql = `delete from tbl_libro where id = $1 returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}

export {getLibro, postLibro, putLibro, deleteLibro}