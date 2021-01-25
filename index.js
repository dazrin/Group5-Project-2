// dependencies 
require('dotenv').config(); // getting dotenv config
const server = require('./api/server'); // getting server file

// setting port
const port = process.env.PORT || 8080;

// if there's an error, print to console and close process
process.on('uncaughtException', (err) => {
    console.error(`${(new Date()).toUTCString()} uncaughtException:`, err);
    process.exit(0);
});

// throw an error if an unhandled rejection is detected
process.on('unhandledRejection', (err) => {
    console.error(`${(new Date()).toUTCString()} unhandledRejection`, err);
});

// Start server and print to console that server is running on specified port
server.listen({ port }, () => console.log(
    `Server ready at http://localhost:${port}/api`,
));