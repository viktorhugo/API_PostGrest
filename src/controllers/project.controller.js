import Project from '../models/modelProject';

export async function getProyects(req, res) {
  try {
    const projects =  await Project.findAll()    
    if (projects) {
        res.json({
            data: projects
        })
    }
  } catch (error) {
      throw error      
  }
 }
export async function createProject(req, res) {
    
    const {name, priority, description, deliverydate} = req.body
    try {
        const newProject = await Project.create({ 
            name,
            priority,
            description,
            deliverydate
        }, {
            fields:['name','priority','description','deliverydate']
        })

        if (newProject) {
            return res.json({
                message:'project created successfully',
                data: newProject
            })
        }
        
    } catch (error) {
        console.log(error);        
        res.status(500).json({
            message: 'Something goes wrong',
            data:{}
        })
        
    }    
}

export async function getOneProyect(req, res) {
    const {id}= req.params

    try {        
        const project =  await Project.findOne({
            where:{id}
        }) 

        if (project) {
            res.json(project)
        }
    } catch (error) {
        throw error
    }
}

export async function deleteProyect(req, res) {
    const {id}= req.params
    try {
            const proyectDelete = await Project.destroy({
                where:{id}
            })

            if (proyectDelete) {
                res.json({
                    message:'Proyect Delete Sucessfully',
                    count: proyectDelete
                })
            }
    } catch (error) {
        console.log(error);        
        throw error
    }
}

export async function updateProyect(req, res) {
    const { id }= req.params
    const {name, priority, description, deliverydate} = req.body

    try {
        const proyects = await Project.findAll({
            attributes:['id','name', 'priority', 'description', 'deliverydate'],
            where:{ id }
        })
        
        if (proyects) {
            const proyectUpdate = proyects.forEach(proyect => {
                proyect.update({
                    name,
                    priority,
                    description,
                    deliverydate
                })
            });
            res.json({
                message:'Project Update Sucessfully',
                data: proyectUpdate
            })
        }
    } catch (error) {
        console.log(error);
        throw error
    }  
}