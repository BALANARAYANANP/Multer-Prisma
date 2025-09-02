import { NextFunction, Request, Response } from "express";
import multer from "multer";

export function errorHandler(err:any , req:Request, res:Response, next: NextFunction){
    if(err instanceof multer.MulterError){
        return res.status(400).json({Error: err.message})
    
    }
    return res.status(500).json({Error : err.message || "Server Error"})
}