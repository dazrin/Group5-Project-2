const { Post } = require('../../models');
const checkAuth = require("../context/index");

const { AuthenticationError } = require('apollo-server-express');

module.exports = {

    // resolver function to handle createPost mutation
  Mutation: {
    async createPost(_, { title, body, }, { user = null }) {
      if (!user) {
        throw new AuthenticationError('You must login to create a post');
      }
      return Post.create({
        userId: user.id,
        title,
        body,
      });
    },
  },
};