const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.static(__dirname));

app.get("/health", (req, res) => {
  res.status(200).json({ status: "healthy" });
});

app.post("/generate", (req, res) => {
  const { prompt, style, duration } = req.body;

  const scenes = [
    { scene: 1, description: "Opening cinematic wide shot" },
    { scene: 2, description: "Close-up emotional performance" },
    { scene: 3, description: "Dynamic camera movement sequence" },
    { scene: 4, description: "Final dramatic ending shot" }
  ];

  res.json({
    status: "success",
    directorPlan: {
      prompt,
      style,
      duration,
      scenes
    }
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
