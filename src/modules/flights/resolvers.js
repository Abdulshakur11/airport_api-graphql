const model = require("./model");

module.exports = {
	Query: {
		getFlights: (_, {airport_id}) => {
			return model.GET_FLIGHTS(airport_id);
		},
	},

	Mutation: {
		newFlights: async (_, {name, airportID}) => {
			console.log(name, airportID);
			return await model.NEW_FLIGHTS(name, airportID)
		}
	},

	Flights: {
		id: (global) => global.flight_id,
		name: (global) => global.flight_name,
	},
};
