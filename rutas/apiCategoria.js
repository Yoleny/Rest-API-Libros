import express  from "express";
const categoria = express();

import { getCategoria, postCategoria, putCategoria, deleteCategoria } 
from "../controles/categoriaControles.js";

categoria.get('', getCategoria);
categoria.post('', postCategoria);
categoria.put('/:id', putCategoria);
categoria.delete('/:id', deleteCategoria);

export {categoria}