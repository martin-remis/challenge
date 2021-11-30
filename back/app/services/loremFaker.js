const axios = require('axios').default;

exports.getSentences = async (quantity) => {
  try {
    const response = await axios.get(`https://lorem-faker.vercel.app/api?quantity=${quantity}`);
    // TODO: persist data
    return response?.data;
  } catch (error) {
    console.error(error.message);
    return [];
  }
};
