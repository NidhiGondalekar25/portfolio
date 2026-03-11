"use client";
import { motion } from "framer-motion";
import { data } from "@/data/resume";
import SectionHeader from "./SectionHeader";
import {
	SiJavascript,
	SiTypescript,
	SiPython,
	SiReact,
	SiNextdotjs,
	SiAngular,
	SiHtml5,
	SiCss,
	SiSass,
	SiBootstrap,
	SiAntdesign,
	SiJest,
	SiCypress,
	SiGit,
	SiSpring,
	SiJasmine,
} from "react-icons/si";
import { MdAccessibility } from "react-icons/md";
import { VscTools } from "react-icons/vsc";
import { IconType } from "react-icons";
import { fadeUpStagger, fadeUpChild } from "@/hooks/useScrollAnimation";

const iconMap: Record<string, { icon: IconType; color: string }> = {
	JavaScript: { icon: SiJavascript, color: "#f7df1e" },
	TypeScript: { icon: SiTypescript, color: "#3178c6" },
	Python: { icon: SiPython, color: "#3776ab" },
	"React.js": { icon: SiReact, color: "#61dafb" },
	"Next.js": { icon: SiNextdotjs, color: "var(--text)" },
	AngularJS: { icon: SiAngular, color: "#dd0031" },
	"React Native": { icon: SiReact, color: "#61dafb" },
	HTML5: { icon: SiHtml5, color: "#e34f26" },
	CSS3: { icon: SiCss, color: "#1572b6" },
	SCSS: { icon: SiSass, color: "#cc6699" },
	Bootstrap: { icon: SiBootstrap, color: "#7952b3" },
	"Carbon Design System": { icon: VscTools, color: "#0f62fe" },
	"Ant Design": { icon: SiAntdesign, color: "#0170fe" },
	Jest: { icon: SiJest, color: "#c21325" },
	"React Testing Library": { icon: SiReact, color: "#e33332" },
	Cypress: { icon: SiCypress, color: "#17202c" },
	Jasmine: { icon: SiJasmine, color: "#8a4182" },
	Karma: { icon: SiJasmine, color: "#56c5b5" },
	WCAG: { icon: MdAccessibility, color: "#005a9c" },
	JAWS: { icon: MdAccessibility, color: "#005a9c" },
	Orca: { icon: MdAccessibility, color: "#2a7ae2" },
	AVT: { icon: MdAccessibility, color: "#2a7ae2" },
	"i18n / GVT": { icon: MdAccessibility, color: "#2a7ae2" },
	Git: { icon: SiGit, color: "#f05032" },
	"CI/CD": { icon: VscTools, color: "var(--muted)" },
	"Pull Requests": { icon: SiGit, color: "#f05032" },
	"Spring Boot": { icon: SiSpring, color: "#6db33f" },
};

export default function Skills() {
	return (
		<section
			id="skills"
			style={{ padding: "80px 56px", maxWidth: "1200px", margin: "0 auto" }}
		>
			<SectionHeader num="01" title="Skills" />
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
				{data.skills.map((group) => (
					<motion.div
						key={group.title}
						variants={fadeUpChild}
						whileHover={{ y: -4, scale: 1.01 }}
					>
						<div
							style={{
								background: "var(--surface)",
								border: "1px solid var(--border)",
								borderRadius: "6px",
								padding: "28px",
								transition: "border-color 0.2s, box-shadow 0.2s",
							}}
							onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
								e.currentTarget.style.borderColor = "rgba(160,212,240,0.4)";
								e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.06)";
							}}
							onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
								e.currentTarget.style.borderColor = "var(--border)";
								e.currentTarget.style.boxShadow = "none";
							}}
						>
							<div
								style={{
									fontSize: "10px",
									letterSpacing: "0.15em",
									textTransform: "uppercase",
									color: "var(--accent-g)",
									marginBottom: "16px",
								}}
							>
								{group.title}
							</div>
							<div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
								{group.tags.map((tag) => {
									const match = iconMap[tag];
									const Icon = match?.icon;
									return (
										<span
											key={tag}
											style={{
												display: "inline-flex",
												alignItems: "center",
												gap: "6px",
												fontSize: "11px",
												padding: "5px 10px",
												background: "var(--surface2)",
												border: "1px solid var(--border)",
												borderRadius: "4px",
												color: "var(--text)",
												letterSpacing: "0.04em",
											}}
										>
											{Icon && (
												<Icon
													style={{
														fontSize: "13px",
														color: match.color,
														flexShrink: 0,
													}}
												/>
											)}
											{tag}
										</span>
									);
								})}
							</div>
						</div>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
}
