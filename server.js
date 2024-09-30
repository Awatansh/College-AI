// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Configuration, OpenAIApi } = require('openai');

// Initialize OpenAI with your API key
const configuration = new Configuration({
  apiKey: 'YOUR_OPENAI_API_KEY',  // Replace with your OpenAI API key
});
const openai = new OpenAIApi(configuration);

// Initialize Express app
const app = express();
app.use(cors());
app.use(bodyParser.json());

// API route to handle chat requests
app.post('/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003', // You can use other models too
      prompt: message,
      max_tokens: 100,  // Customize the response length
    });

    const aiResponse = response.data.choices[0].text.trim();
    res.json({ response: aiResponse });
  } catch (error) {
    res.status(500).json({ error: 'Error communicating with OpenAI' });
  }
});

// Start server on port 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
