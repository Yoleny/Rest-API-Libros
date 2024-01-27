import express  from "express"; 
import { libro } from './rutas/apiLibros.js' 

const app = express();

app.use(express.json()); 
const port = 6000;

app.use('/api/libros', libro);

app.listen(port, ()=>{
    console.log(`Escuchando en el puerto ${port}`);
})