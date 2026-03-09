"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";

const navLinks = [
	{ label: "Skills", href: "#skills" },
	{ label: "Work", href: "#experience" },
	{ label: "Projects", href: "#projects" },
	{ label: "Contact", href: "#contact" },
];

export default function Navbar() {
	const { theme, toggle } = useTheme();

	const handleScroll = (
		e: React.MouseEvent<HTMLAnchorElement>,
		href: string,
	) => {
		e.preventDefault();
		document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<motion.nav
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				right: 0,
				zIndex: 50,
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				padding: "20px 56px",
				backgroundColor: "var(--bg)",
				borderBottom: "1px solid var(--border)",
				boxShadow: "0 4px 24px rgba(0, 0, 0, 0.08)",
				backdropFilter: "blur(10px)",
			}}
		>
			{/* Logo */}
			{/* <a
				href="/"
				style={{
					fontFamily: "var(--font-fraunces)",
					fontSize: "20px",
					fontWeight: 300,
					color: "var(--text)",
					textDecoration: "none",
					letterSpacing: "0.02em",
				}}
			> */}
			NG
			{/* </a> */}
			{/* Nav links */}
			<div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
				{navLinks.map((link) => (
					<a
						key={link.href}
						href={link.href}
						onClick={(e) => handleScroll(e, link.href)}
						style={{
							color: "var(--muted)",
							textDecoration: "none",
							fontSize: "11px",
							letterSpacing: "0.12em",
							textTransform: "uppercase",
							transition: "color 0.2s",
							cursor: "pointer",
						}}
						onMouseEnter={(e) =>
							((e.target as HTMLAnchorElement).style.color = "var(--accent-g)")
						}
						onMouseLeave={(e) =>
							((e.target as HTMLAnchorElement).style.color = "var(--muted)")
						}
					>
						{link.label}
					</a>
				))}

				{/* Theme toggle */}
				<button
					onClick={toggle}
					aria-label="Toggle theme"
					style={{
						width: "36px",
						height: "36px",
						borderRadius: "4px",
						border: "1px solid var(--border)",
						background: "var(--surface)",
						color: "var(--muted)",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						cursor: "pointer",
						transition: "border-color 0.2s, color 0.2s",
						flexShrink: 0,
					}}
					onMouseEnter={(e) => {
						(e.currentTarget as HTMLButtonElement).style.borderColor =
							"var(--accent-g)";
						(e.currentTarget as HTMLButtonElement).style.color =
							"var(--accent-g)";
					}}
					onMouseLeave={(e) => {
						(e.currentTarget as HTMLButtonElement).style.borderColor =
							"var(--border)";
						(e.currentTarget as HTMLButtonElement).style.color = "var(--muted)";
					}}
				>
					{theme === "dark" ? (
						<svg
							width="14"
							height="14"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.5"
						>
							<circle cx="12" cy="12" r="4" />
							<path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
						</svg>
					) : (
						<svg
							width="14"
							height="14"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.5"
						>
							<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
						</svg>
					)}
				</button>
			</div>
		</motion.nav>
	);
}
