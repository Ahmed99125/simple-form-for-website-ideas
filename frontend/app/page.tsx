'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
  const [idea, setIdea] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ideas, setIdeas] = useState<any[]>([]);

  // Fetch all ideas from backend
  const fetchIdeas = async () => {
    try {
      const res = await fetch("http://localhost:3000/website-ideas");
      if (!res.ok) throw new Error("Failed to fetch ideas");
      const data = await res.json();
      setIdeas(data);
    } catch (err: any) {
      setError(err.message || "Unknown error");
    }
  };

  useEffect(() => {
    fetchIdeas();
    // eslint-disable-next-line
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("http://localhost:3000/website-ideas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idea }),
      });
      if (!res.ok) throw new Error("Failed to generate sections");
      setIdea("");
      await fetchIdeas(); // Refresh list after submit
    } catch (err: any) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Website Idea Generator</h1>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16, minWidth: 320 }}>
          <label htmlFor="idea">Enter your website idea:</label>
          <input
            id="idea"
            type="text"
            value={idea}
            onChange={e => setIdea(e.target.value)}
            placeholder="e.g. Landing page for bakery"
            required
            style={{ padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
            disabled={loading}
          />
          <button type="submit" style={{ marginTop: 8, padding: 8, borderRadius: 4, background: "#000", color: "#fff", border: "none" }} disabled={loading}>
            {loading ? "Generating..." : "Submit"}
          </button>
        </form>
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        <div style={{ marginTop: 32 }}>
          <h2>All Website Ideas</h2>
          {ideas.length === 0 ? (
            <p>No ideas yet.</p>
          ) : (
            <ul style={{ padding: 0, listStyle: "none" }}>
              {ideas.map((item, idx) => (
                <li
                  key={item._id || idx}
                  style={{
                    marginBottom: 24,
                    border: "1px solid #eee",
                    borderRadius: 12,
                    padding: 24,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                    transition: "box-shadow 0.2s, border-color 0.2s",
                    cursor: "pointer",
                  }}
                  onMouseOver={e => (e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.10)")}
                  onMouseOut={e => (e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)")}
                >
                  <strong style={{ fontSize: 18 }}>Idea:</strong> <span style={{ fontSize: 16 }}>{item.idea}</span>
                  <ul style={{ marginTop: 12, paddingLeft: 20 }}>
                    {item.sections.map((section: string, i: number) => (
                      <li key={i} style={{ fontSize: 15, marginBottom: 4 }}>{section}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
}
