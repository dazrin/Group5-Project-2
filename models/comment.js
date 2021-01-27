module.exports = (sequelize, DataTypes) => {

  // Type definitions for comment model
  const Comment = sequelize.define(
    "Comment",
    {
      body: DataTypes.TEXT,
      votes: DataTypes.INTEGER,
      postId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {},
  );

  // Define relationships between models associated with comment model
  Comment.associate = (models) => {
    Comment.belongsTo(models.User, { foreignKey: 'userId', as: 'author' });
    Comment.belongsTo(models.Post, { foreignKey: 'postId', as: 'post' });
  };
  return Comment;
};