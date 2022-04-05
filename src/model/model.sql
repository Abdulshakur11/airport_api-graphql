CREATE TABLE airports(
  airport_id serial PRIMARY KEY,
  airport_name VARCHAR(256) NOT NULL
);

CREATE TABLE flights(
  flight_id serial PRIMARY KEY,
  flight_name VARCHAR(46) NOT NULL,
  airport_id INT REFERENCES airports(airport_id) ON DELETE CASCADE
);

INSERT INTO airports(airport_name) VALUES('Karimov');
INSERT INTO airports(airport_name) VALUES('Domodedva');

INSERT INTO flights(flight_name, airport_id) VALUES('From Tashkent to Farg`ona', 1);
INSERT INTO flights(flight_name, airport_id) VALUES('From Tashkent to Samarqand', 1);
INSERT INTO flights(flight_name, airport_id) VALUES('From Andijan to Nukus', 1);
INSERT INTO flights(flight_name, airport_id) VALUES('From Nukus to Qarshi', 1);
INSERT INTO flights(flight_name, airport_id) VALUES('From Piter-burg to Moscow', 2);
INSERT INTO flights(flight_name, airport_id) VALUES('From Burny to Baykit', 2);
INSERT INTO flights(flight_name, airport_id) VALUES('From Botulu to Udachniy', 2);
INSERT INTO flights(flight_name, airport_id) VALUES('From Olenok to Chirinda', 2);

