const model = require("./model");

module.exports = {
	Query: {
		getAirports: () => {
			return model.GET_AIRPORTS();
		},
	},

  Mutation: {
    newAirport: async(_, {name}) => {
      return await model.NEW_AIRPORT(name)
    }
  },

	Airport: {
		id: (global) => global.airport_id,
		name: (global) => global.airport_name,
	},
};
