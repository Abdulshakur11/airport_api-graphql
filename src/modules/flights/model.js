const PG = require('../../lib/postgresOOP');

class Airports extends PG {
  GET_FLIGHTS (airport_id) {
    return this.fetchAll('SELECT * FROM flights where airport_id = $1', airport_id);
  }

  NEW_FLIGHTS (name, airport_id) {
    return this.fetchAll('INSERT INTO flights(flight_name, airport_id) VALUES($1, $2) RETURNING *', name, airport_id)
  }
}

module.exports = new Airports();