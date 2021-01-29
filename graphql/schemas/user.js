const { gql } = require('apollo-server-express');

// Creates a type called User and initiates fields using !
// In User type, added a field called 'posts' that returns a type called 'Post' - makes it possible to query posts created by a user
// [Post!] means it's ok for a user to not have a post, but if the user has a post, it will be of type 'Post'
// Defined two database mutations; Register and Login- serve as endpoints to register and login respectively
// 
module.exports = gql`

 type User {
     id: Int!
     username: String!
     email: String!
     password: String!
     score: Int!
     posts: [Post!]
 }

 extend type Mutation {
     register(input: RegisterInput!): RegisterResponse
     login(input: LoginInput!): LoginResponse
 }

 type RegisterResponse {
    id: Int!
    username: String!
    email: String!
 }

 input RegisterInput {
     username: String!
     email: String!
     password: String!
 }

input LoginInput {
     username: String!
     password: String!
 }

  type LoginResponse {
    id: Int!
    username: String!
    email: String!
    token: String!
 }
`;