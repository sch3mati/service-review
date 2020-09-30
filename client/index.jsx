/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // restaurant_id: 1,
      restaurant: {},
      // reviews: [],
    };
  }

  componentDidMount() {
    this.getRestaurantInfo();
  }

  getRestaurantInfo(x = 1) {
    axios.get(`/api/restaurants/${x}`)
      .then((res) => {
        // console.log(res.data);
        this.setState({
          restaurant: res.data[0],
        });
        console.log(this.state.restaurant);
      })
      .catch((err) => {
        console.log('error with axios get request to restaurants table ', err);
      });

    // axios.get(`/api/reviews/:${x}`)
    //   .then((res) => {
    //     console.log(res.data);
    //     this.setState({
    //       reviews: res.data,
    //     });
    //   })
    //   .catch((err) => {
    //     console.log('error with axios get request to reviews table ', err);
    //   });
  }

  render() {
    return (
      <div>
        {/* {this.state.restaurant} */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

// ReactDOM.render(
//   <h1>Hello, world! from React App Component</h1>,
//   document.getElementById('app'),
// );
