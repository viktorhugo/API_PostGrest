import express,{json} from 'express';
import morgan from 'morgan';
import proyectRouter from './routes/proyects.routes';
import taskRouter from './routes/task.routes';

const app = express()

//middleware
app.use(morgan('dev'))
app.use(json())

//routes
app.use('/api/proyects', proyectRouter)
app.use('/api/task', taskRouter)

export default app