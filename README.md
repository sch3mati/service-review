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
Endpoint: /api/restaurant/:restaurantsId/reviews
Method: GET

GET /api/restaurant/:restaurantsId/reviews

Path parameters: unique restaurant identifier
Success Status Code: 200
Return: a JSON object


  {
	id: Number,
	name: String,
	number_of_reviews:Number,
	rating_food:		Number,
	rating_service:		Number,
  rating_ambience:	Number,
	rating_overall:		Number,
	rating_recent:		Number,
	noise_level:		String,
	would_recommend: 	Number,
	percent_five_star:	Number,
	percent_four_star:	Number,
	percent_three_star:	Number,
	percent_two_star:	Number,
	percent_one_star:	Number,
	loved_for:		[String, String, ...]
}

In case if we want set a new reviews:

Endpoint: /api/restaurant/:restaurantsId/review
Method: POST
POST /api/restaurant/:restaurantsId/review
Path parameters: unique restaurant identifier
Success Status Code: 201

Request body:
{
	user_id:		Number,
	create_date:		Date,
	description: 	String,
	rating_overall:		Number,
	rating_food:		Number,
	rating_service:		Number,
	rating_ambience:	Number,
	noise_level:		String,
	would_recommend: 	Boolean,
	loved_for:		[String, String, ...],
}


Change a review:
Endpoint:  /api/reviews/:reviews
Status code: 200
Method: PATCH
Path parameter: unique review identifier

PATCH /api/reviews/:reviews


Request body:
{
	description: 	String,
	rating_overall:		Number,
	rating_food:		Number,
	rating_service:		Number,
	rating_ambience:	Number,
	noise_level:		‘moderate’,
	would_recommend: 	Boolean,
	loved_for:		[String, String, ...],
}


Delete review:
Endpoint: /api/reviews/:reviews

DELETE /api/reviews/:reviews

Status code: 204




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
