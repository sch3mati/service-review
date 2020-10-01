/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import UserInfo from './UserInfo';
import ReviewInfo from './ReviewInfo';

const All = styled.div`
  padding: 1rem;
  border-bottom: solid 1px #d8d9db;
  display: grid;
  grid-template-columns: 20% 80%;
`;

const Left = styled.div`

`;

const Right = styled.div`

`;

const UserInfoGraphic = styled.div`

`;

const Names = styled.div`

`;

const Photo = styled.div`
  overflow: hidden;
  width: 120px;
  height: 120px;
  background: red;
  border-radius: 60px;
`;

const Ratings = styled.div`
  display: grid;
  grid-template-columns: 5% 5% 5% 5% 80%;
`;

const StarsBar = styled.div`
  height: 1rem;
  width: 2rem;
  border: 1px solid #d8d9db;
  background-color: red;
`;

const ReviewEntry = (props) => (
  <All>
    <Left>
      <Photo>
        <img src={props.review.avatar} alt="" width="125" height="125" />
      </Photo>
      <UserInfoGraphic>
        <Names>
          <h6>{props.review.first_name}</h6>
          <h6>{props.review.last_name}</h6>
        </Names>
        <h6>Number of Reviews {props.review.number_of_reviews}</h6>
      </UserInfoGraphic>
    </Left>
    <Right>
      <StarsBar fill={props.review.rating_overall} />
      <h6>Dined on {props.review.create_date}</h6>
      <Ratings>
        <h6>Overall {props.review.rating_overall}</h6>
        <h6>Food {props.review.rating_food}</h6>
        <h6>Service {props.review.rating_service}</h6>
        <h6>Ambience {props.review.rating_ambience}</h6>
      </Ratings>
      <h6>Review: {props.review.review_message}</h6>
    </Right>
  </All>
);

export default ReviewEntry;
