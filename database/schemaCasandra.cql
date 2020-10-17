DROP KEYSPACE IF EXISTS reviews;
CREATE KEYSPACE reviews
WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};

USE reviews;


CREATE TABLE restaurants (
  id uuid,
  name_of_restaurant varchar,
  number_of_reviews int,
  rating_overall double,
  rating_recent double,
  rating_food double,
  rating_service double,
  rating_ambience double,
  noise_level varchar,
  would_recommend double,
  percent_five_star double,
  percent_four_star double,
  percent_three_star double,
  percent_two_star double,
  percent_one_star double,
  loved_for varchar,
  filters varchar,
  PRIMARY KEY (id)
);

-- CREATE TABLE users (
--   id uuid,
--   avatar varchar,
--   first_name varchar,
--   last_name varchar,
--   number_of_reviews int,
--   locale varchar,
--   PRIMARY KEY (locale, id)
-- );

CREATE TABLE reviews_by_restaurant (
  id uuid,
  id_restaurants int,
  avatar varchar,
  first_name varchar,
  last_name varchar,
  number_of_reviews int,
  locale varchar,
  create_date_month varchar,
  create_date_day varchar,
  create_date_year varchar,
  review_message varchar,
  rating_overall int,
  rating_recent int,
  rating_food int,
  rating_service int,
  rating_ambience int,
  noise_level varchar,
  would_recommend int,
  loved_for varchar,
  filters varchar,
  PRIMARY KEY (id_restaurants, id)
);