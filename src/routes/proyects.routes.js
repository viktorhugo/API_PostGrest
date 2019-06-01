import { Router } from 'express'
const router = Router()
import {createProject, getProyects, getOneProyect, deleteProyect, updateProyect} from '../controllers/project.controller';

//api/projects
router.get('/', getProyects)
router.post('/', createProject)

//api/projects/:id
router.get('/:id', getOneProyect)
router.delete('/:id', deleteProyect)
router.put('/:id', updateProyect)


export default router