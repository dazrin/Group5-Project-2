'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Post.init({
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    upscore: DataTypes.INTEGER,
    category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};

/* Matthew's old code here:

const { Sequelize } = require("sequelize")

module.exports =  (sequelize, DataTypes) => {
    const Post = sequelize.define('Post',{
        id: Sequelize.INTEGER,
        body: Sequelize.TEXT,
        upscore: {type: DataTypes.INTEGER, defaultValue: 0},
        catagory: Sequelize.STRING
    })
}

*/