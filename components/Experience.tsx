"use client";

import { motion } from "framer-motion";
import { data } from "@/data/resume";
import SectionHeader from "./SectionHeader";
import { fadeUpStagger, fadeUpChild } from "@/hooks/useScrollAnimation";

export default function Experience() {
	return (
		<section
			id="experience"
			style={{ padding: "80px 56px", maxWidth: "1200px", margin: "0 auto" }}
		>
			<SectionHeader num="02" title="Experience" />

			<motion.div
				variants={fadeUpStagger}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: false, margin: "-80px" }}
				style={{ display: "flex", flexDirection: "column", gap: "16px" }}
			>
				{data.experience.map((exp, i) => (
					<motion.div
						key={i}
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: false }}
						variants={fadeUpChild}
						style={{
							background: "var(--surface)",
							border: "1px solid var(--border)",
							borderRadius: "6px",
							padding: "36px 40px",
							position: "relative",
							overflow: "hidden",
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
						{/* Top: title + date */}
						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "flex-start",
								marginBottom: "20px",
								flexWrap: "wrap",
								gap: "12px",
							}}
						>
							<div>
								<h3
									style={{
										fontFamily: "var(--font-fraunces)",
										fontSize: "22px",
										fontWeight: 400,
										color: "var(--text)",
										marginBottom: "4px",
									}}
								>
									{exp.title}
								</h3>
							</div>
							<span
								style={{
									fontSize: "11px",
									letterSpacing: "0.1em",
									color: "var(--accent-g)",
									background: "rgba(160,212,240,0.1)",
									border: "1px solid rgba(160,212,240,0.3)",
									padding: "4px 14px",
									borderRadius: "100px",
									whiteSpace: "nowrap",
								}}
							>
								{exp.date}
							</span>
						</div>

						{/* Divider */}
						<div
							style={{
								height: "1px",
								background: "var(--border)",
								marginBottom: "20px",
							}}
						/>

						{/* Bullets */}
						<ul
							style={{
								display: "flex",
								flexDirection: "column",
								gap: "12px",
								marginBottom: exp.metrics.length > 0 ? "28px" : "0",
							}}
						>
							{exp.bullets.map((b, j) => (
								<li
									key={j}
									style={{
										display: "flex",
										gap: "12px",
										fontSize: "13px",
										lineHeight: "1.7",
										color: "var(--muted)",
									}}
								>
									<span
										style={{
											color: "var(--accent-g)",
											marginTop: "2px",
											flexShrink: 0,
										}}
									>
										→
									</span>
									{b}
								</li>
							))}
						</ul>

						{/* Metrics */}
						{exp.metrics.length > 0 && (
							<>
								<div
									style={{
										height: "1px",
										background: "var(--border)",
										marginBottom: "20px",
									}}
								/>
								<div style={{ display: "flex", flexWrap: "wrap", gap: "32px" }}>
									{exp.metrics.map((m, j) => (
										<div
											key={j}
											style={{
												display: "flex",
												flexDirection: "column",
												gap: "2px",
											}}
										>
											<span
												style={{
													fontFamily: "var(--font-fraunces)",
													fontSize: "32px",
													fontWeight: 300,
													color: "var(--accent-g)",
													lineHeight: 1,
												}}
											>
												{m.val}
											</span>
											<span
												style={{
													fontSize: "10px",
													letterSpacing: "0.12em",
													textTransform: "uppercase",
													color: "var(--muted)",
													marginTop: "4px",
												}}
											>
												{m.label}
											</span>
										</div>
									))}
								</div>
							</>
						)}
					</motion.div>
				))}
			</motion.div>
		</section>
	);
}
