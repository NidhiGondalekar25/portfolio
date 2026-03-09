"use client";

import { motion } from "framer-motion";
import { data } from "@/data/resume";

const links = [
	{ label: "Email", value: data.email, href: `mailto:${data.email}` },
	{
		label: "Phone",
		value: data.phone,
		href: `tel:${data.phone.replace(/\s/g, "")}`,
	},
	{ label: "LinkedIn", value: "Nidhi Gondalekar", href: data.linkedin },
	{ label: "GitHub", value: "NidhiGondalekar", href: data.github },
];

export default function Footer() {
	return (
		<footer
			id="contact"
			style={{
				maxWidth: "1200px",
				margin: "0 auto",
				padding: "80px 56px",
				borderTop: "1px solid var(--border)",
			}}
		>
			{/* Top row */}
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "1fr 1fr",
					gap: "48px",
					marginBottom: "64px",
					alignItems: "start",
				}}
			>
				{/* Left: heading + tagline */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<div
						style={{
							fontFamily: "var(--font-fraunces)",
							fontSize: "56px",
							fontWeight: 300,
							lineHeight: 1.1,
							color: "var(--text)",
							marginBottom: "20px",
						}}
					>
						Let&apos;s
						<br />
						<em style={{ fontStyle: "italic", color: "var(--accent-g)" }}>
							connect.
						</em>
					</div>
					<p
						style={{
							fontSize: "13px",
							lineHeight: "1.8",
							color: "var(--muted)",
							maxWidth: "340px",
						}}
					>
						Open to frontend engineering roles, accessibility consulting, and
						interesting collaborations. Feel free to reach out!
					</p>
				</motion.div>

				{/* Right: contact links */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.15, duration: 0.6 }}
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "4px",
					}}
				>
					{links.map((link) => (
						<a
							key={link.label}
							href={link.href}
							target={link.href.startsWith("http") ? "_blank" : undefined}
							rel="noopener noreferrer"
							style={{
								display: "flex",
								alignItems: "center",
								gap: "0",
								textDecoration: "none",
								padding: "16px 20px",
								borderRadius: "6px",
								border: "1px solid transparent",
								transition: "all 0.2s",
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.background = "var(--surface)";
								e.currentTarget.style.borderColor = "var(--border)";
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.background = "transparent";
								e.currentTarget.style.borderColor = "transparent";
							}}
						>
							<span
								style={{
									fontSize: "10px",
									letterSpacing: "0.15em",
									textTransform: "uppercase",
									color: "var(--accent-g)",
									width: "80px",
									flexShrink: 0,
								}}
							>
								{link.label}
							</span>
							<span
								style={{
									width: "1px",
									height: "14px",
									background: "var(--border)",
									marginRight: "20px",
									flexShrink: 0,
								}}
							/>
							<span
								style={{
									fontSize: "13px",
									color: "var(--muted)",
									transition: "color 0.2s",
								}}
							>
								{link.value}
							</span>
						</a>
					))}
				</motion.div>
			</div>

			{/* Divider */}
			<div
				style={{
					height: "1px",
					background: "var(--border)",
					marginBottom: "28px",
				}}
			/>

			{/* Bottom bar */}
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					flexWrap: "wrap",
					gap: "12px",
				}}
			>
				<span style={{ fontSize: "12px", color: "var(--muted)" }}>
					© {new Date().getFullYear()} Nidhi Gondalekar
				</span>
				<div style={{ display: "flex", gap: "24px" }}>
					{["Skills", "Work", "Projects", "Contact"].map((item) => (
						<a
							key={item}
							href={`#${item.toLowerCase()}`}
							onClick={(e) => {
								e.preventDefault();
								document
									.querySelector(`#${item.toLowerCase()}`)
									?.scrollIntoView({ behavior: "smooth" });
							}}
							style={{
								fontSize: "11px",
								letterSpacing: "0.1em",
								textTransform: "uppercase",
								color: "var(--muted)",
								textDecoration: "none",
								transition: "color 0.2s",
							}}
							onMouseEnter={(e) =>
								((e.target as HTMLAnchorElement).style.color =
									"var(--accent-g)")
							}
							onMouseLeave={(e) =>
								((e.target as HTMLAnchorElement).style.color = "var(--muted)")
							}
						>
							{item}
						</a>
					))}
				</div>
				<span
					style={{
						fontSize: "12px",
						color: "var(--muted)",
						letterSpacing: "0.06em",
					}}
				>
					Built with Next.js + Framer Motion
				</span>
			</div>
		</footer>
	);
}
