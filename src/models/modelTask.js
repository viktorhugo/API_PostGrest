import Sequelize from 'sequelize'
import sequelize from '../config/database';

const Task = sequelize.define('task',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: { 
        type: Sequelize.TEXT
     },
    done: {
         type: Sequelize.BOOLEAN
     },
    projectId: {
        type: Sequelize.INTEGER
    }
})

export default Task