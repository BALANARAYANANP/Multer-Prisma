import { inject, injectable } from "inversify";
import { Types } from "../../Type";
import { profileServices } from "../Services/ProfileService";
import { Request, Response } from "express";
import { profiledto } from "../dto/profiledto";




@injectable()

export class profileController{
    constructor(@inject (Types.profileServices) private profileServices: profileServices){}

    createProfile = async(req:Request, res:Response)=> {
        try{
            const data: profiledto = req.body

            if(!req.file){
                return res.status(400).json({err : "Resume is Required"})
            }
            const newProfile = await this.profileServices.newProfile({
                name: data.name,
                email: data.email,
                password: data.password,
                Resume: req.file?.path
            })
            res.status(201).json({"Profile Created Sucessfully": newProfile})
            return
        }catch(err:any){
            res.status(400).json({Error: err.message})
        }
    }
}


