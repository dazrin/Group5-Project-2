// dependencies 
require('dotenv').config(); // getting dotenv config
const server = require('./api/server'); // getting server file

// setting port
const port = process.env.PORT || 8080;

// engine handelbars
// const exphbs = require('express-handlebars');

// app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');


// set up get route for heroku homepage
// if (process.env.NODE_ENV === "production"){
//   app.use(express.static("build"));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname,  "build", "index.html"));
//   });
// }

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