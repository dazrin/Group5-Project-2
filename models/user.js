// Dependencies
const nanoid = require('nanoid'); // generates a random id
const bcrypt = require('bcryptjs'); // hashes password 

module.exports = (sequelize, DataTypes) => {
  // Define User table in sequelize
  const User = sequelize.define(

    // Type Definitions for User Model
    'User',
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      score: DataTypes.INTEGER
    },

    // defaultScope; Ensures password is not returned as part of query response
    {
      defaultScope: {
        rawAttributes: { exclude: ['password'] },
      },
    },
  );

  // Asynchronous function that automatically hashes password when it's passed in by using beforeCreate hook
  User.beforeCreate(async (user) => {

    // When query request is received to create user,
    // execute async function to automatically hash the user's password before the user object is created
    user.password = await user.generatePasswordHash();
  });
  // Function to hash user's password
  User.prototype.generatePasswordHash = () => {

    // Pass in user's password
    if (this.password) {

      // Use bcrypt to take in the user's password and hash it
      return bcrypt.hash(this.password, 10);
      // return nanoid(10);
    }
  };

  // Defines relationships with models associated with User model
  User.associate = (models) => {

    // A user has many posts
    User.hasMany(models.Post, { foreignKey: 'userId', as: 'posts' });
  };
  return User;
};