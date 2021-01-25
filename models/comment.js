const { Sequelize } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        // id: Sequelize.INTEGER,
        body: DataTypes.TEXT,
        user: DataTypes.STRING,

    })

    return Comment
}