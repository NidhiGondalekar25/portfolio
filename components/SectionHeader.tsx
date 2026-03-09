"use client";

import { motion } from "framer-motion";
import { slideInLeft } from "@/hooks/useScrollAnimation";

interface SectionHeaderProps {
	num: string;
	title: string;
}

export default function SectionHeader({ num, title }: SectionHeaderProps) {
	return (
		<motion.div
			variants={slideInLeft}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: false, margin: "-80px" }}
			style={{
				display: "flex",
				alignItems: "center",
				gap: "20px",
				marginBottom: "48px",
			}}
		>
			<span
				style={{
					fontSize: "11px",
					letterSpacing: "0.15em",
					color: "var(--accent-g)",
				}}
			>
				{num}
			</span>
			<h2
				style={{
					fontFamily: "var(--font-fraunces)",
					fontSize: "clamp(36px, 4vw, 56px)",
					fontWeight: 300,
					letterSpacing: "-0.02em",
					color: "var(--text)",
				}}
			>
				{title}
			</h2>
			<div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
		</motion.div>
	);
}
