const { gql } = require('apollo-server-express');

// Creates a type called Post and initiates fields using !
// In Post type, adds two queries to fetch all posts and fetch a single post
// Defined database mutation to create a new post
// Has a comment field that says a post doesn't have to have a comment, but if it does, it will be of type 'comment'
module.exports = gql`

 type Post {
     id: Int!
     title: String!
     body: String!
     votes: Int!
     voteUp: [Vote]!
     category: String!
     author: User!
     comments: [Comment!]
     commentCount: Int!
     createdAt: String!
 }

 type Vote {
     id: ID!
     createdAt: String!
     username: String!
 }

extend type Query {
    getPosts: [Post!]
    getPost(postId: Int!): Post
}

 extend type Mutation {
     createPost(title: String!, body: String!, category: String!): CreatePostResponse
 }

 type CreatePostResponse {
    id: Int!
    title: String!
    body: String!
    category: String!
    createdAt: String!
 }
`;