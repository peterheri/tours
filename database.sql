CREATE DATABASE tours;

CREATE TABLE customers (
    id SERIAL PRIMARY KEY, 
    fullnames varchar(250),
    email varchar(250),
    gender varchar,
    yearofbirth int,
    place varchar
)

CREATE TABLE trips(
    id SERIAL PRIMARY KEY, 
    tripname varchar(255),
    location varchar(255),
    state varchar(255),
    price int
)

CREATE TABLE booktrip(
    id SERIAL PRIMARY KEY, 
    fullnames varchar(255),
    gender varchar(255),
    tripname varchar(255),
    yearofbooking int,
    monthofbooking varchar(255),
    modeofpayment varchar(255),
    paid boolean
)