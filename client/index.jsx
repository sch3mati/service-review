/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import RestaurantInfo from './components/RestaurantInfo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // restaurant_id: 1,
      restaurant: {},
      reviewsList: [],
      users: [],
    };
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
      })
      .catch((err) => {
        console.log('error with axios get request to restaurants table ', err);
      });
  }

  getReviewsList(x = 1) {
    axios.get(`/api/responses/${x}`)
      .then((res) => {
        this.setState({
          reviewsList: res.data,
        });
      })
      .catch((err) => {
        console.log('error with axios get request to reviews table ', err);
      });
  }

  getUsers() {
    axios.get('/api/users')
      .then((res) => {
        console.log(res.data);
        this.setState({
          users: res.data,
        });
      })
      .catch((err) => {
        console.log('error with axios get request to users table ', err);
      });
  }

  render() {
    return (
      <div>
        <RestaurantInfo />
        <ReviewsContainer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
