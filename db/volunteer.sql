DROP DATABASE IF EXISTS volunteer;
CREATE DATABASE volunteer;


CREATE TABLE volunteer(
  id serial primary key,
  name varchar(255), 
  national_id varchar(255),
  gender varchar(255),
    email varchar(255),
    my_password varchar(255),
    image text ,
    city varchar(255)
);
CREATE TABLE admin(
  id serial primary key,
  name varchar(255), 
    my_password varchar(255)
);
INSERT INTO admin(id, name, my_password)
	VALUES (1, 'mohamed', '123456');

CREATE TABLE patient(
  id serial primary key,
  name varchar(255), 
  gender varchar(255),
    age varchar(255),
    days int,
    department varchar(255),
    room varchar(255)
);

CREATE TABLE together(
  patient_id int,
  volunteer_id int, 
  visit_date date
);



