// Dependencies + getting gql schemas
const { gql } = require('apollo-server-express');
const userType = require('./user')
const postType = require('./post')
const commentType = require('./comment')

// Defines the root types that graphQL will use to manipulate the database
const rootType = gql`
 type Query {
     root: String
 }
 type Mutation {
     root: String
 }

`;

// Exporting gql types for resolvers to use
module.exports = [rootType, userType, postType, commentType];