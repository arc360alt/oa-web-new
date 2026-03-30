// Central API client — update API_BASE for production deployment
const API_BASE = import.meta.env.PUBLIC_API_URL || "http://localhost:3001";

export async function fetchDownloads() {
  const res = await fetch(`${API_BASE}/api/downloads`);
  if (!res.ok) throw new Error("Failed to fetch downloads");
  return res.json();
}

export async function fetchNews() {
  const res = await fetch(`${API_BASE}/api/news`);
  if (!res.ok) throw new Error("Failed to fetch news");
  return res.json();
}

export async function fetchNewsPost(id) {
  const res = await fetch(`${API_BASE}/api/news/${id}`);
  if (!res.ok) throw new Error("Post not found");
  return res.json();
}
