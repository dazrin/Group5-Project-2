// Dependencies 
const jwt = require('jsonwebtoken'); // json web token to create session id
const bcrypt = require('bcryptjs');  // used to compare password input to hashed password

const { UserInputError, AuthenticationError } = require('apollo-server-express'); // deconstruct Auth error object to throw auth error if password field doesn't match when attempting to log in
const { User } = require('../../models'); // getting + decontructing User model 
const { validateRegisterInput, validateLoginInput } = require('../../util/validators'); // Import validation methods
const { SECRET_KEY } = require('../../secret'); // Sensitive data 

// Function to generate a new user token
generateToken = (user) => {

  // Returns a json web token for the user
  return jwt.sign(
      {
          id: user.id,
          email: user.email,
          username: user.username
      },
      SECRET_KEY,
      { expiresIn: '1h' }
  );
}

// Creating register and login resolvers for the mutations in User Schema
module.exports = {

    // Mutation to add a user to the database
  Mutation: {

      // Asynchronous function that extracts contents of User model and passes the data as a parameter for the database mutation
      // Essentially gets user info and adds a new user with the info provided
    async register(_, args, context) {

      const { username, password, email } = args.input;
      // Validate User Data

      return User.create({ username, password, email });
      /*
      // Validate User Data
      const { valid, errors } = validateRegisterInput(name, email, password, confirmPassword);
      if (!valid) {
        throw new UserInputError('Errors', { errors });
      }

      // Ensure user doesn't already exist
      const user = await User.findOne({ name });
      if (user) {
        throw new UserInputError('Name is taken', {
          errors: {
            name: 'This name is taken'
          }
        })
      }

      // Hash password and create an auth token
      password = await bcrypt.hash(password, 12);

      const newUser = new User({
        email,
        name,
        password,
        createdAt: newDate().toISOString()
      });

      const res = await newUser.save();

      const token = generateToken(res);

      return {
        ...res._doc,
        id: res._id,
        token
      };*/
    },

    // Asynchronous function that takes in an email and password as an input parameter;
    // when an input is passed, uses sequelize to find a user with a matching email to the input parameter entered
    // if the user and password match, create a new jsonwebtoken and assign it to the id of the user
    // return the user and the generated session token
    // if the user and password don't match, throw a new auth error stating "Invalid credentials"
  
    async login(_, { input }, context) {
      const { username, password } = input;
      const user = await User.findOne({ where: { username } });
      const match = await user && bcrypt.compare(password, user.password);
      if (match) {
        const token = generateToken(user);
        return { ...user.toJSON(), token };
      }
      throw new AuthenticationError('Invalid Credentials');

      /*
      // Validate login data
      const { errors, valid } = validateLoginInput(name, password);

      // If login data is not valid, throw error 
      if(!valid) {
        throw new UserInputError('Errors', { errors });
      }

      // Find a user in the database that matches the email field inputted
      const user = await User.findOne({ where: { name } });
      
      // If there is no user that matches the email field, throw an error & print 'User not found'
      if(!user) {
        errors.general = 'User not found';
        throw new UserInputError('User not found', { errors });
      }

      // Use bcrypt to compare the password input to the password field of the user found
      const match = await bcrypt.compare(password, user.password);

      // * Password Validation 
      // If the password inputted doesn't match the found user's password field, throw an error & print 'Wrong Credentials'
      if(!match) {
        errors.general = 'Wrong Credentials';
        throw new UserInputError('Wrong Credentials', { errors });
      }

      // Generate a session token for the user found
      const token = generateToken(user);

      // return user object
      return {
        ...user._doc,
        id: user._id,
        token
      };
      /*
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({ id: user.id }, 'mySecret');
        return { ...user.toJSON(), token };
      }
      throw new AuthenticationError('Invalid credentials');*/
    },
  },
};