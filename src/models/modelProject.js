import Sequelize from 'sequelize'
import sequelize from '../config/database';
import Task from './modelTask';

const Project = sequelize.define('projects',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name:{ type: Sequelize.TEXT },
    priority:{ type: Sequelize.INTEGER },
    description:{type: Sequelize.TEXT},
    deliverydate:{ type: Sequelize.DATE }
},{
    timestamps: false 
})

Project.hasMany(Task, {foreingKey:' projectId', sourceKey: 'id'}) // el proyecto tiene muchas tareas
Task.belongsTo(Project, { foreingKey: 'projectId', sourceKey: 'id'}) // muchas tareas le pertenecen a un solo proyecto

export default Project