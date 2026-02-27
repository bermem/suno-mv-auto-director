const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("🎬 AI MV Director using HuggingFace");
});

app.post("/generate", async (req, res) => {
  try {
    const { prompt, style, duration } = req.body;

    const response = await fetch(
      "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.HF_TOKEN}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          inputs: `
You are a professional music video director.
Create 8 cinematic scenes storyboard.
Prompt: ${prompt}
Style: ${style}
Duration: ${duration}
Return structured JSON.
`
        })
      }
    );

    const data = await response.json();

    res.json({ result: data });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "HuggingFace AI failed" });
  }
});

module.exports = app;
