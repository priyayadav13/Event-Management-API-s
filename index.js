const { startStandaloneServer } = require('@apollo/server/standalone');
const { ApolloServer } = require('@apollo/server')
let schema = require("./src")

const { url } = startStandaloneServer(
  new ApolloServer({
    schema,
  }), {
  listen: { port: 5000 },
  context: ({ req }) => {
    const token = req.headers.authorization || '';
    return { req, token };
  },
})
  .then(() => {
    console.log(`
      🚀  Server is running!
      🔉  Listening on port 4000
      📭  Query at http://localhost:4000
    `);
  })
