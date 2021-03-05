
import axios from 'axios';

let baseURL="https://studentbe.herokuapp.com/"

if(process.env.NODE_ENV === 'production') {
    baseURL='https://studentbe.herokuapp.com/'
}

export default axios.create({
    baseURL,
  });


