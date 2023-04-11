import { Router } from "express";
import {getCategoria, postCategoria } from '../controllers/categoria.controller'


const categoriaRouter = Router();

categoriaRouter.get('/', getCategoria);
categoriaRouter.post('/', postCategoria);


export default categoriaRouter;