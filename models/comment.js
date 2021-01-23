const { Sequelize } = require("sequelize")

module.exports =  (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment',{
        id: Sequelize.INTEGER,
        body: Sequelize.TEXT,
        user: Sequelize.STRING,
        createdAt: Sequelize.DATE
    })
}