import axios from 'axios';

const api = `https://api.datamuse.com/words?rel_rhy=`;

const findRhyme = async (userWord, userMaxItems) => {
  try {
    const endpoint = api + userWord + '&max=' + userMaxItems;
    const res = await axios(endpoint);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default findRhyme;
