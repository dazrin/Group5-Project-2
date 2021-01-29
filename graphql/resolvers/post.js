const { Post } = require('../../models');
const checkAuth = require("../context/index");

const { AuthenticationError } = require('apollo-server-express');

module.exports = {

    // Resolver function to handle mutations and queries related to Post model
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

  // Get all posts in the database
  Query: {
    async getPosts(root, args, context) {
      return Post.findAll();
    },

    // Get single post in the database
    // - finds a particular post using the postId
    async getPost(_, { postId }, context) {
      return Post.findByPk(postId);
    },
  },

  // Returns the author of a post
  Post: {
    author(post) {
      return post.getAuthor();
    },

    comments(post) {
      return post.getComments();
    },
  },
};