import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { config } from 'dotenv'
import userRoutes from '../src/user/user.routes.js'
import teacherRoutes from '../src/teacher/teacher.routes.js'
import courseRoutes from '../src/courses/course.routes.js'



const app = express() //Crear el servidor
config()
const port = process.env.PORT || 3200

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(morgan('dev')) 

app.use(userRoutes)
app.use('/teacher', teacherRoutes)
app.use('/course', courseRoutes)


export const initServer = ()=>{
    app.listen(port)
    console.log(`Server HTTP running in port ${port}`)
}