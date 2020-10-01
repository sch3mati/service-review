/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import RestaurantInfo from './components/RestaurantInfo';
import ReviewEntry from './components/ReviewEntry';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: {},
      reviewsList: [],
      users: [],
    };
    this.getRestaurantInfo = this.getRestaurantInfo.bind(this);
    this.getReviewsList = this.getReviewsList.bind(this);
    this.getUsers = this.getUsers.bind(this);
  }

  componentDidMount() {
    this.getRestaurantInfo();
    this.getReviewsList();
    this.getUsers();
  }

  getRestaurantInfo(x = 1) {
    axios.get(`/api/restaurants/${x}`)
      .then((res) => {
        this.setState({
          restaurant: res.data[0],
        });
        // console.log('res data rest', res.data[0]);
        // console.log('rest', this.state.restaurant);
      })
      .catch((err) => {
        console.log('error with axios get request to restaurants table ', err);
      });
  }

  getReviewsList(x = 1) {
    axios.get(`/api/review_list/${x}`)
      .then((res) => {
        this.setState({
          reviewsList: res.data,
        });
        // console.log('res data review', res.data);
        // console.log('reviews', this.state.reviewsList);
      })
      .catch((err) => {
        console.log('error with axios get request to reviews table ', err);
      });
  }

  getUsers() {
    axios.get('/api/users')
      .then((res) => {
        this.setState({
          users: res.data,
        });
        // console.log('res data user', res.data);
        // console.log('users', this.state.users);
      })
      .catch((err) => {
        console.log('error with axios get request to users table ', err);
      });
  }

  render() {
    const { restaurant } = this.state;
    const { reviewsList } = this.state;
    const reviewLength = reviewsList.length;

    return (

      <div>
        <RestaurantInfo restaurant={restaurant} length={reviewLength} />
        {reviewsList.map((review, index) => (
          <ReviewEntry review={review} key={index} />
        ))}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
