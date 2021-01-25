'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    score: DataTypes.INTEGER,
    sessionID: DataTypes.STRING,
    id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};

/* Matthew's old code here

module.exports =  (sequelize, DataTypes) => {
    const User = sequelize.define('User',{
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
        
        score: Sequelize.INTEGER,
        sessionID: Sequelize.STRING,
        id: Sequelize.INTEGER
    })
}

*/