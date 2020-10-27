import http from 'k6/http'
import {sleep} from 'k6'

export const options = {
    stages: [
  {duration: '1m', target: 100},
  {duration: '2m', target: 1000},
  {duration: '3m', target: 1000}
    ]
}

export default function(){
  const url = 'http://localhost:3002';
  const restaurantId = Math.floor(Math.random() * 20000 - 1) + 1;
  http.get(`${url}/api/restaurants/${restaurantId}`);
  sleep(0.1);

}