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
Endpoint: /api/reviews/:restaurantsId/{id}
Method: GET
GET /api/reviews/:restaurantsId/{id}
Parameters: unique identifier
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

Endpoint: /api/reviews/reviews/post?reviewId=
Method: POST
POST /api/reviews/reviews/post?reviewId=
Success Status Code: 200

{
	id: 			Number,
	id_restaurant:		Number,
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
Endpoint:  /api/reviews/:reviews?reviewId=
Status code: 200
Method: PATCH

PATCH /api/reviews/:reviews?reviewId=

{
	id: 			Number,
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

Status code: 200




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
