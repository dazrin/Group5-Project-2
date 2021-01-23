const { Sequelize } = require("sequelize")

module.exports =  (sequelize, DataTypes) => {
    const Post = sequelize.define('Post',{
        id: Sequelize.INTEGER,
        body: Sequelize.TEXT,
        upscore: {type: DataTypes.INTEGER, defaultValue: 0},
        catagory: Sequelize.STRING
    })
}