import express from "express";
import cors from "cors";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataDir = join(__dirname, "data");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Helper to read a JSON data file
function readData(filename) {
  return JSON.parse(readFileSync(join(dataDir, filename), "utf-8"));
}

// --- Routes ---

// GET /api/downloads — full downloads data
app.get("/api/downloads", (req, res) => {
  try {
    res.json(readData("downloads.json"));
  } catch (e) {
    res.status(500).json({ error: "Failed to load downloads data" });
  }
});

// GET /api/news — all news posts
app.get("/api/news", (req, res) => {
  try {
    const news = readData("news.json");
    // Sort by date descending
    news.sort((a, b) => new Date(b.date) - new Date(a.date));
    res.json(news);
  } catch (e) {
    res.status(500).json({ error: "Failed to load news data" });
  }
});

// GET /api/news/:id — single news post
app.get("/api/news/:id", (req, res) => {
  try {
    const news = readData("news.json");
    const post = news.find((n) => n.id === req.params.id);
    if (!post) return res.status(404).json({ error: "Post not found" });
    res.json(post);
  } catch (e) {
    res.status(500).json({ error: "Failed to load news data" });
  }
});

// Health check
app.get("/api/health", (_req, res) => res.json({ ok: true }));

app.listen(PORT, () => {
  console.log(`OptiArk API running on http://localhost:${PORT}`);
  console.log(`Thank you for helping develop OptiArk!!!`);
});
