/* eslint-disable linebreak-style */
/* eslint-disable */
import initialData from '../helpers/initialData';
const KEY = 'd6cad4b10e1346ddbf9153320222609';
const error = initialData;

const fetchData = async (city) => {
  const url = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`;

  const fetchResponse = await fetch(url);
  const data = await fetchResponse.json();
  if (fetchResponse.status === 400) {
    return error;
  } else {
    return data;
  }
};

export default fetchData;
