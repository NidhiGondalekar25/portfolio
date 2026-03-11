"use client";

import { motion } from "framer-motion";
import { data } from "@/data/resume";

const fadeUp = {
	hidden: { opacity: 0, y: 30 },
	visible: (i = 0) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.7, delay: i * 0.15, ease: "easeOut" },
	}),
};

export default function Hero() {
	return (
		<section
			style={{
				// minHeight: "100vh",
				display: "grid",
				gridTemplateColumns: "1fr 1fr",
				gap: "48px",
				padding: "120px 56px 80px",
				alignItems: "flex-start",
				position: "relative",
				overflow: "hidden",
				maxWidth: "1200px",
				margin: "0 auto",
			}}
		>
			{/* Background grid */}
			<div
				style={{
					position: "absolute",
					inset: 0,
					backgroundImage:
						"linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
					backgroundSize: "60px 60px",
					pointerEvents: "none",
				}}
			/>

			{/* Glow */}
			<div
				style={{
					position: "absolute",
					right: 0,
					top: "50%",
					transform: "translateY(-50%)",
					width: "500px",
					height: "500px",
					borderRadius: "50%",
					background:
						"radial-gradient(circle, rgba(160,212,240,0.08) 0%, transparent 70%)",
					pointerEvents: "none",
				}}
			/>

			{/* Left: text */}
			<div style={{ position: "relative", zIndex: 1 }}>
				<motion.div
					custom={0}
					variants={fadeUp}
					initial="hidden"
					animate="visible"
					style={{
						display: "flex",
						alignItems: "center",
						gap: "8px",
						marginBottom: "28px",
					}}
				>
					<span
						style={{
							width: "24px",
							height: "1px",
							background: "var(--accent-g)",
							display: "block",
						}}
					/>
					<span
						style={{
							fontSize: "11px",
							letterSpacing: "0.15em",
							textTransform: "uppercase",
							color: "var(--accent-g)",
						}}
					>
						Available for opportunities
					</span>
				</motion.div>

				<motion.h1
					custom={1}
					variants={fadeUp}
					initial="hidden"
					animate="visible"
					style={{
						fontFamily: "var(--font-fraunces)",
						fontSize: "clamp(52px, 6vw, 88px)",
						fontWeight: 300,
						lineHeight: 1.05,
						letterSpacing: "-0.02em",
						marginBottom: "28px",
						color: "var(--text)",
					}}
				>
					Nidhi
					<br />
					<em style={{ fontStyle: "italic", color: "var(--accent-g)" }}>
						Gondalekar
					</em>
				</motion.h1>

				<motion.p
					custom={2}
					variants={fadeUp}
					initial="hidden"
					animate="visible"
					style={{
						fontSize: "13px",
						lineHeight: 1.8,
						maxWidth: "420px",
						marginBottom: "48px",
						color: "var(--muted)",
					}}
				>
					{data.tagline}
				</motion.p>

				<motion.div
					custom={3}
					variants={fadeUp}
					initial="hidden"
					animate="visible"
					style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}
				>
					<a
						href={`mailto:${data.email}`}
						style={{
							padding: "12px 28px",
							fontSize: "12px",
							letterSpacing: "0.08em",
							textTransform: "uppercase",
							borderRadius: "4px",
							textDecoration: "none",
							border: "1px solid var(--accent-g)",
							background: "var(--accent-g)",
							color: "var(--bg)",
							transition: "all 0.2s",
						}}
						onMouseEnter={(e) => {
							(e.currentTarget as HTMLAnchorElement).style.background =
								"transparent";
							(e.currentTarget as HTMLAnchorElement).style.color =
								"var(--accent-g)";
						}}
						onMouseLeave={(e) => {
							(e.currentTarget as HTMLAnchorElement).style.background =
								"var(--accent-g)";
							(e.currentTarget as HTMLAnchorElement).style.color = "var(--bg)";
						}}
					>
						Get in Touch
					</a>

					<a
						href="#experience"
						onClick={(e) => {
							e.preventDefault();
							document
								.querySelector("#experience")
								?.scrollIntoView({ behavior: "smooth" });
						}}
						style={{
							padding: "12px 28px",
							fontSize: "12px",
							letterSpacing: "0.08em",
							textTransform: "uppercase",
							borderRadius: "4px",
							textDecoration: "none",
							border: "1px solid var(--border)",
							color: "var(--text)",
							transition: "all 0.2s",
						}}
						onMouseEnter={(e) => {
							(e.currentTarget as HTMLAnchorElement).style.borderColor =
								"var(--accent-g)";
							(e.currentTarget as HTMLAnchorElement).style.color =
								"var(--accent-g)";
						}}
						onMouseLeave={(e) => {
							(e.currentTarget as HTMLAnchorElement).style.borderColor =
								"var(--border)";
							(e.currentTarget as HTMLAnchorElement).style.color =
								"var(--text)";
						}}
					>
						View Work ↓
					</a>

					<a
						href="/resume.pdf"
						download
						style={{
							padding: "12px 28px",
							fontSize: "12px",
							letterSpacing: "0.08em",
							textTransform: "uppercase",
							borderRadius: "4px",
							textDecoration: "none",
							border: "1px solid var(--border)",
							color: "var(--muted)",
							transition: "all 0.2s",
						}}
						onMouseEnter={(e) => {
							(e.currentTarget as HTMLAnchorElement).style.borderColor =
								"var(--accent-b)";
							(e.currentTarget as HTMLAnchorElement).style.color =
								"var(--accent-b)";
						}}
						onMouseLeave={(e) => {
							(e.currentTarget as HTMLAnchorElement).style.borderColor =
								"var(--border)";
							(e.currentTarget as HTMLAnchorElement).style.color =
								"var(--muted)";
						}}
					>
						Resume ↓
					</a>
				</motion.div>
			</div>

			{/* Right: stats */}
			<motion.div
				custom={2}
				variants={fadeUp}
				initial="hidden"
				animate="visible"
				style={{
					position: "relative",
					zIndex: 1,
					display: "flex",
					flexDirection: "column",
					gap: "2px",
				}}
			>
				{data.stats.map((s, i) => (
					<motion.div
						key={i}
						whileHover={{ x: 4 }}
						transition={{ type: "spring", stiffness: 300 }}
						style={{
							background: "var(--surface)",
							border: "1px solid var(--border)",
							padding: "28px",
							display: "flex",
							alignItems: "flex-start",
							gap: "20px",
							transition: "border-color 0.2s",
						}}
						onMouseEnter={(e) =>
							(e.currentTarget.style.borderColor = "rgba(160,212,240,0.3)")
						}
						onMouseLeave={(e) =>
							(e.currentTarget.style.borderColor = "var(--border)")
						}
					>
						<div
							style={{
								fontFamily: "var(--font-fraunces)",
								fontSize: "48px",
								fontWeight: 300,
								lineHeight: 1,
								color: "var(--accent-g)",
								minWidth: "80px",
							}}
						>
							{s.num}
						</div>
						<div>
							<div
								style={{
									fontSize: "11px",
									letterSpacing: "0.1em",
									textTransform: "uppercase",
									color: "var(--muted)",
								}}
							>
								{s.label}
							</div>
							<div
								style={{
									fontSize: "12px",
									color: "var(--text)",
									marginTop: "4px",
								}}
							>
								{s.desc}
							</div>
						</div>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
}
