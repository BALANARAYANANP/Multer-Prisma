import { inject, injectable } from "inversify";
import { PrismaClient } from "@prisma/client";
import { Types } from "../../Type";
import { profiledto } from "../dto/profiledto";
 


@injectable()

export class profileRepo{
    private readonly prisma: PrismaClient;
    
    constructor(@inject(Types.PrismaClient) prisma : PrismaClient){
        this.prisma = prisma
    }


    async CreateCustomer(data:profiledto){
        try{
            
            return await this.prisma.profile.create({data:{
                name : data.name,
                email: data.email,
                password : data.password,
                Resume : data.Resume
            }})
        }catch(err:any){
            console.log(err.message)
            throw new Error("Error Occured While creating profile in Repository")
        }
    }
}