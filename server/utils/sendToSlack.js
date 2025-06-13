const axios = require('axios');

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL; 

const sendToSlack = async (message) => {
  try {
    const payload = {
      text: message,
    };

    const response = await axios.post(SLACK_WEBHOOK_URL, payload);
    return response.data;
  } catch (error) {
    console.error('Slack Error:', error.message);
    throw error;
  }
};

module.exports = sendToSlack;
