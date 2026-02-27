const express = require("express");
const app = express();

app.use(express.json());

// Root route (เปิดเว็บแล้วไม่ขาว)
app.get("/", (req, res) => {
  res.send("🎬 AI MV Auto Director API is running");
});

// Generate endpoint
app.post("/generate", (req, res) => {
  const { prompt, style, duration } = req.body;

  // จำลอง AI ประมวลผล
  const response = {
    status: "success",
    director: "AI MV Auto Director",
    input: {
      prompt,
      style,
      duration
    },
    storyboard: [
      { scene: 1, description: "Opening cinematic wide shot" },
      { scene: 2, description: "Close-up emotional performance" },
      { scene: 3, description: "Dynamic camera movement transition" },
      { scene: 4, description: "Final climax slow motion scene" }
    ],
    message: "MV Plan Generated Successfully"
  };

  res.json(response);
});

module.exports = app;
