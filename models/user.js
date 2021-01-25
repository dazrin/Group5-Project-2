module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140],
            },
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140],
            },
        },

        // score: Sequelize.INTEGER,
        // sessionID: Sequelize.STRING,
        // id: Sequelize.INTEGER
    })

    return User
}