const axios = require('axios');

const baseURL = process.env.PYTHON_API_URL || 'http://localhost:8000';

exports.calculate = async (path, payload) => {
  const response = await axios.post(`${baseURL}${path}`, payload);
  return response.data;
};
