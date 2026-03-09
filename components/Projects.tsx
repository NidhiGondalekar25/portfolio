"use client";

import { motion } from "framer-motion";
import { data } from "@/data/resume";
import SectionHeader from "./SectionHeader";
import { fadeUpStagger, fadeUpChild } from "@/hooks/useScrollAnimation";

export default function Projects() {
	return (
		<section
			id="projects"
			style={{ padding: "80px 56px", maxWidth: "1200px", margin: "0 auto" }}
		>
			<SectionHeader num="03" title="Projects" />

			<motion.div
				variants={fadeUpStagger}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: false, margin: "-80px" }}
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(3, 1fr)",
					gap: "16px",
				}}
			>
				{data.projects.map((p, i) => (
					<motion.div
						key={p.title}
						variants={fadeUpChild}
						whileHover={{ y: -6 }}
						style={{
							background: "var(--surface)",
							border: "1px solid var(--border)",
							borderRadius: "6px",
							padding: "32px",
							display: "flex",
							flexDirection: "column",
							gap: "16px",
							cursor: "default",
							transition: "border-color 0.2s, box-shadow 0.2s",
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.borderColor = "rgba(160,212,240,0.5)";
							e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.08)";
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.borderColor = "var(--border)";
							e.currentTarget.style.boxShadow = "none";
						}}
					>
						{/* Icon */}
						<div style={{ fontSize: "36px" }}>{p.icon}</div>

						{/* Title */}
						<h3
							style={{
								fontFamily: "var(--font-fraunces)",
								fontSize: "22px",
								fontWeight: 400,
								color: "var(--accent-g)",
							}}
						>
							{p.title}
						</h3>

						{/* Divider */}
						<div style={{ height: "1px", background: "var(--border)" }} />

						{/* Description */}
						<p
							style={{
								fontSize: "13px",
								lineHeight: "1.8",
								color: "var(--muted)",
								flex: 1,
							}}
						>
							{p.desc}
						</p>

						{/* Award */}
						{p.award && (
							<>
								<div style={{ height: "1px", background: "var(--border)" }} />
								<div
									style={{
										fontSize: "10px",
										letterSpacing: "0.1em",
										textTransform: "uppercase",
										color: "var(--accent-a)",
										display: "flex",
										alignItems: "center",
										gap: "6px",
									}}
								>
									{p.award}
								</div>
							</>
						)}
					</motion.div>
				))}
			</motion.div>
		</section>
	);
}
