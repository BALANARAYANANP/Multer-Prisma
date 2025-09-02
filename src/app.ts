import express from 'express'
import { ProfileRouter } from './profile/routes/profileRoute'
import { errorHandler } from './profile/Error Handler/multerErrorHandler'

const app = express()

app.use(express.json())

app.use('/', ProfileRouter)
app.use(errorHandler)


app.listen('3000', ()=>{
    console.log("Server is Running on 3000")
})