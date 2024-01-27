import pg from 'pg-promise'
const pgp = pg()
const cnstr = `postgresql://postgres:Salmeron28@localhost:5432/api_biblioteca`; 
const db = pgp(cnstr);

db.connect()
    .then( ()=>{
        console.log("Conexion Exitosa");
    } )
    .catch( (err)=>{

        console.log(`Error de conexion ${err}`)
    } )

export { db }