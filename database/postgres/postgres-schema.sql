DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;

\c reviews;


CREATE TABLE IF NOT EXISTS restaurants (
  id serial primary key,
  name_of_restaurant varchar(50),
  number_of_reviews int,
  rating_overall decimal(2, 1),
  rating_recent decimal(2, 1),
  rating_food decimal(2, 1),
  rating_service decimal(2, 1),
  rating_ambience decimal(2, 1),
  noise_level varchar(20),
  would_recommend decimal(3, 2),
  percent_five_star decimal(3, 2),
  percent_four_star decimal(3, 2),
  percent_three_star decimal(3, 2),
  percent_two_star decimal(3, 2),
  percent_one_star decimal(3, 2),
  loved_for varchar(100),
  filters varchar(100)
);

CREATE TABLE IF NOT EXISTS users (
  id serial primary key,
  avatar varchar(100),
  first_name varchar(20),
  last_name varchar(20),
  number_of_reviews int,
  locale varchar(50)
);

CREATE TABLE IF NOT EXISTS review_list (
  id serial primary key,
  id_restaurants int references restaurants(id) NOT NULL,
  id_user int references users(id) NOT NULL,
  create_date_month varchar(10),
  create_date_day varchar(3),
  create_date_year varchar(6),
  review_message varchar,
  rating_overall int,
  rating_recent int,
  rating_food int,
  rating_service int,
  rating_ambience int,
  noise_level varchar(20),
  would_recommend int,
  loved_for varchar(150),
  filters varchar(150)

);