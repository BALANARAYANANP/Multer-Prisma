import { Container } from "inversify";
import { PrismaClient } from "@prisma/client";
import { Types } from "./Type";
import { profileRepo } from "./profile/repository/profileRepository";
import { profileServices } from "./profile/Services/ProfileService";
import { profileController } from "./profile/Controller/profileController";

export const container = new Container()


container.bind<PrismaClient>(Types.PrismaClient).toConstantValue(new PrismaClient())
container.bind<profileRepo>(Types.profileRepository).to(profileRepo)
container.bind<profileServices>(Types.profileServices).to(profileServices)
container.bind<profileController>(Types.profileController).to(profileController)
