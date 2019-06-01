import {Router} from 'express'
import { createTask, getTasks } from '../controllers/task.controller';

const router = Router()

//api/tasks
router.post('/', createTask)
router.get('/', getTasks)


export default router