import { Router } from "express";
import { container } from "../../inversify.config";
import { profileController } from "../Controller/profileController";
import { Types } from "../../Type";
import { upload } from "../../middleware/multer";

export const ProfileRouter = Router()

const profileControllers = container.get<profileController>(Types.profileController)
ProfileRouter.post("/new",upload.single('Resume'), profileControllers.createProfile)