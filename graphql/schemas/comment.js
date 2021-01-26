const { gql } = require('apollo-server-express');

// Creates a type called Comment and initiates fields using !
// Defined database mutation to create a new comment
// Has an author field that returns type User for the user that made the comment
// Has a post field that returns type Post for the Post the comment belongs to
module.exports = gql`

 type Comment {
     id: Int!
     content: String!
     author: User!
     post: Post!
     createdAt: String

 }

 extend type Mutation {
     createComment(content: String!, postId: Int!): CreateCommentResponse
 }

 type CreateCommentResponse {
    id: Int!
    content: String!
    createdAt: String!
 }

`;