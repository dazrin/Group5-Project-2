
module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        // id: Sequelize.INTEGER,
        body: DataTypes.TEXT,
        title: DataTypes.STRING,
        upscore: { type: DataTypes.INTEGER, defaultValue: 0 },
        // catagory: Sequelize.STRING
    })

    return Post
}