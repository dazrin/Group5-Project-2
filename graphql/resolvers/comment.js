const { Post } = require('../../models');

const { AuthenticationError, ApolloError } = require('apollo-server-express');

module.exports = {
  Mutation: {
      // Ensures that only users who are logged in can create a comment
    async createComment(_, { body, postId }, { user = null }) {
      if (!user) {
        throw new AuthenticationError('You must login to create a comment');
      }

      // When prompted, finds the Post to comment on via postId
      const post = await Post.findByPk(postId);

      // If the post Id is found / valid,
      // create a comment with the input body + with the id of the user who created it
      if (post) {
        return post.createComment({ body, userId: user.id });
      }
      throw new ApolloError('Unable to create a comment');
    },

   /* async deleteComment(_, { postId, commentId }, { user = null }) {
      if (!user) {
        throw new AuthenticationError('You must login to delete your comment');
      }

      const post = Post.findByPk(postId);

      if(post) {
          const commentIndex = post.comments.findIndex((comment) => comment.id === commentId); // trying to access comment array id field


          if (post.comments[commentIndex].userId === user.userId) {
              post.comments.splice(commentIndex, 1);
              post.update(comments, commentId);
              return post;
          } else {
              throw new AuthenticationError("Action not allowed");
          }
          } else {
              throw new UserInputError('Post not found');
          }
        }
  },*/

  Comment: {
    author(comment) {
      return comment.getAuthor();
    },
    post(comment) {
      return comment.getPost();
    },
  },
};
