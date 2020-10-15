# Project Name

> sch3mati

## Related Projects
- Popular Dishes Service - Billy - https://github.com/sch3mati/popular-dishes-service
- Photos Carousel Service - Chris - https://github.com/sch3mati/photos-carousel-service
- Bookings Service - Victoria - https://github.com/sch3mati/bookings-service
- Reviews Service - Mike - https://github.com/sch3mati/reviews-service

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

Description: grab all rating data for a specified restaurant
Endpoint: /api/reviews/restaurants/{id}
Method: GET
Parameters: unique identifier
Return: a JSON object
Example response:
{
	id: 			001,
	name: 			‘Maggiano’,
	number_of_reviews:	84,
	rating_food:		3.8,
	rating_service:		2.7,
rating_ambience:	3.2,
	rating_overall:		3.4,
	rating_recent:		2.5,
	noise_level:		‘moderate’,
	would_recommend: 	0.34,
	percent_five_star:	0.05,
	percent_four_star:	0.15,
	percent_three_star:	0.60,
	percent_two_star:	0.10,
	percent_one_star:	0.10,
	loved_for:		[‘Most Booked’, ‘Great for Dinner’],
	filters:			[‘Bar Seating’, ‘Good for Singles’]
}


Description: grab all reviews data for a specified restaurant
Endpoint: /api/reviews/reviews/{restaurant_id}
Method: GET
Parameters: unique identifier
Return: an array of JSON objects
Example of one element in response array:
{
	id: 			0034,
	restaurant_id:		001,
	user_id:		007,
	avatar:			‘http://some_S3_url_path’,
	user_first_name: 	‘Sarah’,
	user_last_name: 	‘Connor’,
	location:		‘San Francisco, CA’,
	create_date:		2020-07-23,
description: 	‘I loved this place. Except for the robots in the kitchen. Just something wasn’t right about them.’,
rating_overall:		3.4,
	rating_food:		3.8,
	rating_service:		2.7,
rating_ambience:	3.2,
	noise_level:		‘moderate’,
	would_recommend: 	false,
	loved_for:		[‘Most Booked’, ‘Great for Dinner’],
	filters:			[‘Bar Seating’, ‘Good for Singles’]
}


Description: grab all reviews data for a specified user
Endpoint: /api/reviews/review_list/{user_id}
Method: GET
Parameters: unique identifier
Return: an array of JSON objects
Example of one element in response array:
{
	id: 			0034,
	id_restaurant:		001,
	user_id:		007,

	create_date:		2020-07-23,
description: 	‘I loved this place. Except for the robots in the kitchen. Just something wasn’t right about them.’,
rating_overall:		3.4,
	rating_food:		3.8,
	rating_service:		2.7,
rating_ambience:	3.2,
	noise_level:		‘moderate’,
	would_recommend: 	false,
	loved_for:		[‘Most Booked’, ‘Great for Dinner’],
	filters:			[‘Bar Seating’, ‘Good for Singles’]
}


## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```
