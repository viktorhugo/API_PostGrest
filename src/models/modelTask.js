import Sequelize from 'sequelize'
import sequelize from '../config/database';

const Task = sequelize.define('tasks',{
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
    projectid: {
        type: Sequelize.INTEGER
    },
    createdAt: {
        field: 'created_at',
        type: Sequelize.DATE,
    },
    updatedAt: {
        field: 'updated_at',
        type: Sequelize.DATE,
    }
})

export default Task