const Koa = require('koa')
const ask = require('apollo-server-koa')
const ApolloServer = ask.ApolloServer    
const gql = ask.gql

const MongoDB = require('./database')

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
    level: String
    find: String
  }
`

const find = async function() {
    const a = await MongoDB.findOne()
    return JSON.stringify(a)
}

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    level: () => 'level',
    find: find
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

const app = new Koa()
server.applyMiddleware({ app })

const port = 3001
const host = 'localhost'

app.listen(port, host, () =>
  console.log(`🚀 Server ready at http://${host}:${port}${server.graphqlPath}`),
)