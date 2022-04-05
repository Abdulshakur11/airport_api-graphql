const { gql } = require('apollo-server-express');

module.exports = gql`
  type Airport {
    id: ID!
    name: String!
  }

  type Query {
    getAirports: [Airport!]!
  }

  type Mutation {
    newAirport(name: String!): [Airport]
  }
`