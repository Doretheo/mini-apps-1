
DROP DATABASE IF EXISTS checkout;

CREATE DATABASE checkout;

USE checkout;

CREATE TABLE account (
  customer_id int auto_increment not null primary key,
  first_name varchar(20),
  last_name varchar(20),
  email varchar(40),
  pass varchar(20)
);

CREATE TABLE hood (
  address_1 varchar(30),
  address_2 varchar(30),
  city varchar(20),
  little_country varchar(20),
  zipcode int(6) not null
);

CREATE TABLE creditCard (
  credit_card int(24) not null,
  expiry_data int(4) not null,
  CVV int(3) not null,
  billing_zipcode int(6) not null
);

