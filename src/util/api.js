import axios from 'axios';

const api = `https://api.datamuse.com/words?rel_rhy=`;

const findRhyme = async (userWord, userMaxItems) => {
  if (userWord.split(' ').length === 1) {
    try {
    //   setIsLoading(true);
      const endpoint = api + userWord + '&max=' + userMaxItems;

      const result = await axios(endpoint);
    //   setIsLoading(false);
    //   setResults(result.data);
    } catch (error) {
      console.log(error);
    }
  } else {
  }
};

export default findRhyme;
