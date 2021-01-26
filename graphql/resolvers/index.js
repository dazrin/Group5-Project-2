// GraphQL Resolvers Explanation:
// A resolver function takes four parameters; root, args, context, and info
// eg: resolverFunction(root, args, context, info) {}

// root: This is the result of the parent resolver
// args: The arguements/ data provided by the graphQL query. Can be seen as req payload in REST API
// context: An object available to all resolvers. Any data that should be globally accessible to all resolvers is placed in context
// info: An object which contains specific information to the correct query

// Importing each resolver function
const userResolvers = require('./user');
const postResolvers = require('./post');
const commentResolvers = require('./comment');

module.exports = [userResolvers, postResolvers, commentResolvers];
