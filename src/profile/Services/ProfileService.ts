import { inject, injectable } from "inversify";
import { Types } from "../../Type";
import { profileRepo } from "../repository/profileRepository";
import { profiledto } from "../dto/profiledto";

@injectable()
export class profileServices{
    constructor(@inject (Types.profileRepository) private profileRepository : profileRepo){} 
    

    async newProfile(data:profiledto){
        try{
            return await this.profileRepository.CreateCustomer(data)
        }catch(err:any){
            throw new Error("Error Occured while Creationg Profile in Services")
        }
    }
}
