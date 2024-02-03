import express  from "express"; 
import { libro } from './rutas/apiLibro.js' 
import { categoria } from './rutas/apiCategoria.js'

const app = express();

app.use(express.json()); 
const port = 6000;

app.use('/api/libro', libro);
app.use('/api/categoria', categoria);

app.listen(port, ()=>{
    console.log(`Escuchando en el puerto ${port}`);
})