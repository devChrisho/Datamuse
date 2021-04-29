import axios from 'axios';

const api = `https://api.datamuse.com/words?rel_rhy=`;

const findRhyme = (userWord, userMaxItems) => {
  const endpoint = api + userWord + '&max=' + userMaxItems;
  axios(endpoint)
    .then(res => {
      console.log(res.data)
      return res.data;
    })
    .catch(error => {
      console.log(error);
    });
};

export default findRhyme;
