 // Dependencies
const { AuthenticationError } = require('apollo-server-express')   // auth error object used to throw auth errors when password doesn't match

const { User } = require('../../models'); // getting + deconstructing User model
const jwt = require('jsonwebtoken'); // use json web token to assign a session id

// Asynchronous helper function that takes in the login token to verify a user
// verifies token and returns user whos id is encoded in the token
const verifyToken = async (token) => {
  try {
      // validate that data being passed is the token
    if (!token) return null;

    // deconstruct session id and verify by comparing with secret key token was stored to
    const { id } = await jwt.verify(token, 'mySecret');

    // pass in jwt verification to user
    const user = await User.findByPk(id);

    // return verification of user id to token
    return user;
  } catch (error) {
      // if an error occurs, throw a new auth error
    throw new AuthenticationError(error.message);
  }
};

// check for the authorization in request headers
// if there's a token, decode it and pass user object to context
// allows for us to check for the user object in the context to determine if the request is authenticated
module.exports = async ({ req }) => {
  const token = (req.headers && req.headers.authorization) || '';
   const user = await verifyToken(token)
  return { user };
};
