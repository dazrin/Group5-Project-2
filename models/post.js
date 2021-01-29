module.exports = (sequelize, DataTypes) => {

  // Type Definitons for Post model
  const Post = sequelize.define(
    'Post',
    {
      title: DataTypes.STRING,
      body: DataTypes.TEXT,
      votes: DataTypes.INTEGER,
      category: DataTypes.STRING,
      userId: DataTypes.INTEGER
    },
    {},
  );

  // Define relationships between models associated with Post model
  Post.associate = (models) => {

    // A post belongs to a user
    Post.belongsTo(models.User, { foreignKey: 'userId', as: 'author' });

    // A post has many comments
    Post.hasMany(models.Comment, { foreignKey: 'postId', as: 'comments' });
  };
  return Post;
}