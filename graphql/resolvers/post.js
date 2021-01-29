const { Post } = require('../../models');
const { verifyToken } = require("../context/index");

const { AuthenticationError } = require('apollo-server-express');

module.exports = {

    // Resolver function to handle mutations and queries related to Post model
  Mutation: {
    // Create Post Mutation
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


  // Delete Post Mutation
   async deletePost(_, { postId }, { user = null }){

    // Ensures you must be logged in to delete a post
    if (!user) {
      throw new AuthenticationError('You must login to delete your post');
    }
      // Finds a specific post with a matching id in the database
        const post = Post.findByPk(postId);

        // Checks if the user's id matches the id of the user who created the post to be deleted
        if(user.userId === post.userId){
          Post.destroy({
            where: { id: postId }
           })
          return 'Post deleted successfully';
        } else {
            throw new AuthenticationError('Action not allowed');
        }
      }
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