const PG = require('../../lib/postgresOOP');

class Airports extends PG {
  GET_AIRPORTS () {
    return this.fetchAll('SELECT * FROM airports');
  }

  NEW_AIRPORT (airport_name) {
    return this.fetchAll('INSERT INTO airports(airport_name) VALUES($1) RETURNING *', airport_name)
  }
}

module.exports = new Airports();