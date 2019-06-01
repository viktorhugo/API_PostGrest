import Task from "../models/modelTask";

export async function createTask(req, res) {
    const {name, done, projectid}= req.body
    try {
        const newProject = await Task.create({
            name,
            done,
            projectid
        })

        if (newProject) {
            res.json({
                message:'Project Successfully Created'
            })
        }

    } catch (error) {
        console.log(error);
        
        res.json({
            message:' Error Or Created',
            data: error
        })
    }

}
export async function getTasks(req, res) {
    try {
        const tasks = await Task.findAll()

        if (tasks) {
            res.json(tasks)
        }

    } catch (error) {
        throw error
        console.log(error);        
        res.send({
            message:'Wrong ',
            error: error
        })   
    }    
}
export function getOneTask(req, res) {
    
}
export function updateTask(req, res) {
    
}
export function deleteTask(req, res) {
    
}
export function getTaskByProyect(req, res) {
    
}
