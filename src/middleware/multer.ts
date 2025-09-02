import multer from 'multer'
import path from 'path'




const storage = multer.diskStorage({
    destination: (req,res,cb) => {
        cb(null,'./uploads')
    },
    filename: (req,file,cb)=> {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})


    const fileFilter = (req:any,file : Express.Multer.File,cb: multer.FileFilterCallback)=>{
        
        
        if(file.mimetype === 'application/pdf'){
            cb(null, true)
        }
        else{

            cb(new Error("Only Pdf files are allowed"))
        }
    }

export const upload = multer({ storage, fileFilter , limits: 
    { fileSize : 1 * 1024 * 1024}});