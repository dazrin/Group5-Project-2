// Dependencies 
const jwt = require('jsonwebtoken');                              // json web token to create session id
const bcrypt = require('bcryptjs');                               // used to compare password input to hashed password
const { AuthenticationError } = require('apollo-server-express'); // deconstruct Auth error object to throw auth error if password field doesn't match when attempting to log in
const { User } = require('../models');                            // getting + decontructing User model 

// Creating register and login resolvers for the mutations in User Schema
module.exports = {

    // Mutation to add a user to the database
  Mutation: {

      // Asynchronous function that extracts contents of User model and passes the data as a parameter for the database mutation
      // Essentially gets user info and adds a new user with the info provided
    async register(root, args, context) {
      const { name, email, password, score } = args.input;
      return User.create({ name, email, password, score });
    },

    // Asynchronous function that takes in an email and password as an input parameter;
    // when an input is passed, uses sequelize to find a user with a matching email to the input parameter entered
    // if the user and password match, create a new jsonwebtoken and assign it to the id of the user
    // return the user and the generated session token
    // if the user and password don't match, throw a new auth error stating "Invalid credentials"
    // TODO: validate inputs + store JWT secret in .env
    async login(root, { input }, context) {
      const { email, password } = input;
      const user = await User.findOne({ where: { email } });
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({ id: user.id }, 'mySecret');
        return { ...user.toJSON(), token };
      }
      throw new AuthenticationError('Invalid credentials');
    },
  },
};