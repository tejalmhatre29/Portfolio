const express = require('express');
const cors = require('cors');
require('dotenv').config();
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

console.log("✅ Loaded API key:", process.env.OPENROUTER_API_KEY); // Debug

app.post('/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'openai/gpt-3.5-turbo',
        messages: [
          { role: 'system', content: "You are Tejal's chatbot assistant." },
          { role: 'user', content: message }
        ]
      },
      {
        headers: {
          'Authorization': process.env.OPENROUTER_API_KEY,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'http://localhost:3000',
          'X-Title': 'TejBot'
        }
      }
    );

    const reply = response.data.choices[0].message.content;
    res.json({ reply });
  } catch (err) {
    console.error("❌ OpenRouter Error:", err.response?.data || err.message || err);
    res.status(500).json({ reply: "Something went wrong with OpenRouter." });
  }
});

app.listen(5000, () => {
  console.log('✅ Server running at http://localhost:5000');
});
