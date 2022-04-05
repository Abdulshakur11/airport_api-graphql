const { gql } = require("apollo-server-express");

module.exports = gql`
	type Flights {
		id: ID!
		name: String!
	}

	extend type Query {
		getFlights(airport_id: ID!): [Flights]
	}

  extend type Mutation {
    newFlights(name: String!, airportID: ID!): [Flights]
  }
`;
