"use client";
import { motion } from "framer-motion";
import { data } from "@/data/resume";
import SectionHeader from "./SectionHeader";
import { fadeUpStagger, fadeUpChild } from "@/hooks/useScrollAnimation";

export default function Publications() {
  return (
    <section id="publications" style={{ padding: "80px 56px", maxWidth: "1200px", margin: "0 auto" }}>
      <SectionHeader num="05" title="Publications" />
      <motion.div
        variants={fadeUpStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-20px" }}
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
      >
        {data.publications.map((pub, i) => (
          <motion.div
            key={i}
            variants={fadeUpChild}
            ><div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "6px",
              padding: "36px 40px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "32px",
              transition: "border-color 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
              e.currentTarget.style.borderColor = "rgba(160,212,240,0.5)";
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.08)";
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{ flex: 1 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "11px", letterSpacing: "0.1em", color: "var(--accent-g)", background: "rgba(160,212,240,0.1)", border: "1px solid rgba(160,212,240,0.3)", padding: "3px 12px", borderRadius: "100px", marginBottom: "16px" }}>
                {pub.year}
              </div>
              <h3 style={{ fontFamily: "var(--font-fraunces)", fontSize: "20px", fontWeight: 400, color: "var(--text)", lineHeight: "1.4", marginBottom: "12px", fontStyle: "italic" }}>
                {pub.title}
              </h3>
              <div style={{ height: "1px", background: "var(--border)", marginBottom: "12px" }} />
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "var(--muted)" }}>
                <span style={{ color: "var(--accent-g)" }}>📍</span>
                {pub.conference}
              </div>
            </div>
            <a
              href={pub.doi}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "10px 20px", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", border: "1px solid var(--border)", borderRadius: "4px", color: "var(--accent-g)", whiteSpace: "nowrap", flexShrink: 0, transition: "all 0.2s" }}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.borderColor = "var(--accent-g)";
                e.currentTarget.style.background = "rgba(160,212,240,0.1)";
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              View DOI ↗
            </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}