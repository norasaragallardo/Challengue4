import { Response, Request } from "express";
import Categoria from "../models/categoria.model";


export const getCategoria = async (req: Request, res: Response) => {
  const result = await Categoria.findAll();
  res.status(200).json({
    success: true,
    message: "hola mundo, nos llego el get",
    data: result,
  });
};


export const postCategoria = async (req: Request, res: Response) => {
  const { body } = req;
  const result = await Categoria.create(body);
  res.status(201).json({
    success: true,
    message: "categoria creada correctamente",
    data: result,
  });
};
