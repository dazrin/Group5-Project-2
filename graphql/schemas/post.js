const { gql } = require('apollo-server-express');

// Creates a type called Post and initiates fields using !
// In Post type, adds two queries to fetch all posts and fetch a single post
// Defined database mutation to create a new post
// Has a comment field that says a post doesn't have to have a comment, but if it does, it will be of type 'comment'
module.exports = gql`

 type Post {
     id: Int!
     title: String!
     content: String!
     upScore: Int!
     category: String!
     author: User!
     comments: [Comment!]
     createdAt: String

 }

extend type Query {
    getAllPosts: [Post!]
    getSinglePost(postId: Int!): Post
}

 extend type Mutation {
     createPost(title: String!, content: String!): CreatePostResponse
 }

 type CreatePostResponse {
    id: Int!
    title: String!
    content: String!
    createdAt: String!
 }

`;