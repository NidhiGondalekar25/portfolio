"use client";

import { motion } from "framer-motion";
import { data } from "@/data/resume";
import SectionHeader from "./SectionHeader";
import { fadeUpStagger, fadeUpChild } from "@/hooks/useScrollAnimation";

export default function Certifications() {
	return (
		<section
			id="certs"
			style={{ padding: "80px 56px", maxWidth: "1200px", margin: "0 auto" }}
		>
			<SectionHeader num="04" title="Certifications" />

			{/* Certs grid */}
			<motion.div
				variants={fadeUpStagger}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: false, margin: "-80px" }}
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(3, 1fr)",
					gap: "16px",
					marginBottom: "80px",
				}}
			>
				{data.certifications.map((cert) => (
					<motion.div
						key={cert.name}
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: false }}
						variants={fadeUpChild}
						whileHover={{ y: -4 }}
						style={{
							background: "var(--surface)",
							border: "1px solid var(--border)",
							borderRadius: "6px",
							padding: "24px 28px",
							display: "flex",
							alignItems: "center",
							gap: "16px",
							transition: "border-color 0.2s, box-shadow 0.2s",
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.borderColor = "rgba(160,212,240,0.4)";
							e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.06)";
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.borderColor = "var(--border)";
							e.currentTarget.style.boxShadow = "none";
						}}
					>
						{/* Icon */}
						<div
							style={{
								width: "36px",
								height: "36px",
								borderRadius: "50%",
								background: "rgba(160,212,240,0.1)",
								border: "1px solid rgba(160,212,240,0.3)",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								flexShrink: 0,
								fontSize: "14px",
							}}
						>
							✦
						</div>
						<div>
							<div
								style={{
									fontSize: "13px",
									fontWeight: 500,
									color: "var(--text)",
									marginBottom: "4px",
								}}
							>
								{cert.name}
							</div>
							<div
								style={{
									fontSize: "11px",
									letterSpacing: "0.06em",
									color: "var(--accent-g)",
								}}
							>
								{cert.issuer}
							</div>
						</div>
					</motion.div>
				))}
			</motion.div>

			{/* Awards header */}
			{/* <motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: false }}
				transition={{ duration: 0.6 }}
				style={{
					display: "flex",
					alignItems: "center",
					gap: "20px",
					marginBottom: "32px",
				}}
			>
				<span
					style={{
						fontSize: "11px",
						letterSpacing: "0.15em",
						color: "var(--accent-a)",
					}}
				>
					★
				</span>
				<h2
					style={{
						fontFamily: "var(--font-fraunces)",
						fontSize: "40px",
						fontWeight: 300,
						color: "var(--text)",
					}}
				>
					Awards
				</h2>
				<div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
			</motion.div> */}
			<SectionHeader num="05" title="Awards" />
			{/* Awards grid */}
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
				{data.awards.map((award, i) => (
					<motion.div
						key={i}
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: false }}
						variants={fadeUpChild}
						whileHover={{ y: -4 }}
						style={{
							background: "var(--surface)",
							border: "1px solid var(--border)",
							borderRadius: "6px",
							padding: "24px 28px",
							display: "flex",
							alignItems: "center",
							gap: "16px",
							transition: "border-color 0.2s, box-shadow 0.2s",
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.borderColor = "rgba(240,200,160,0.5)";
							e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.06)";
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.borderColor = "var(--border)";
							e.currentTarget.style.boxShadow = "none";
						}}
					>
						<div
							style={{
								width: "36px",
								height: "36px",
								borderRadius: "50%",
								background: "rgba(240,200,160,0.1)",
								border: "1px solid rgba(240,200,160,0.3)",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								flexShrink: 0,
								fontSize: "16px",
								color: "var(--accent-a)",
							}}
						>
							★
						</div>
						<div
							style={{
								fontSize: "13px",
								color: "var(--text)",
								lineHeight: "1.5",
							}}
						>
							{award}
						</div>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
}
