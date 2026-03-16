"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const navLinks = [
	{ label: "Skills", href: "#skills" },
	{ label: "Work", href: "#experience" },
	{ label: "Projects", href: "#projects" },
	{ label: "Contact", href: "#contact" },
];

export default function Navbar() {
	const { theme, toggle } = useTheme();
	const [menuOpen, setMenuOpen] = useState(false);

	const handleScroll = (
		e: React.MouseEvent<HTMLAnchorElement>,
		href: string,
	) => {
		e.preventDefault();
		document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
		setMenuOpen(false);
	};

	return (
		<>
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
					backdropFilter: "blur(10px)",
					boxShadow: "0 4px 24px rgba(0, 0, 0, 0.08)",
				}}
			>
				{/* Logo */}
				<Link
					href="/"
					style={{
						fontFamily: "var(--font-fraunces)",
						fontSize: "20px",
						fontWeight: 300,
						color: "var(--text)",
						textDecoration: "none",
						letterSpacing: "0.02em",
						zIndex: 10,
					}}
				>
					NG
				</Link>

				{/* Desktop nav links */}
				<div
					className="desktop-nav"
					style={{ display: "flex", alignItems: "center", gap: "40px" }}
				>
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
							onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) =>
								(e.currentTarget.style.color = "var(--accent-g)")
							}
							onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) =>
								(e.currentTarget.style.color = "var(--muted)")
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
						onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
							e.currentTarget.style.borderColor = "var(--accent-g)";
							e.currentTarget.style.color = "var(--accent-g)";
						}}
						onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
							e.currentTarget.style.borderColor = "var(--border)";
							e.currentTarget.style.color = "var(--muted)";
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

				{/* Mobile right side: theme toggle + hamburger */}
				<div
					className="mobile-nav"
					style={{ display: "flex", alignItems: "center", gap: "12px" }}
				>
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

					{/* Hamburger button */}
					<button
						onClick={() => setMenuOpen(!menuOpen)}
						aria-label="Toggle menu"
						style={{
							width: "36px",
							height: "36px",
							borderRadius: "4px",
							border: "1px solid var(--border)",
							background: "var(--surface)",
							color: "var(--muted)",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							gap: "5px",
							cursor: "pointer",
							padding: "8px",
						}}
					>
						<span
							style={{
								display: "block",
								width: "16px",
								height: "1.5px",
								background: "var(--text)",
								transition: "all 0.2s",
								transform: menuOpen
									? "rotate(45deg) translate(4px, 4px)"
									: "none",
							}}
						/>
						<span
							style={{
								display: "block",
								width: "16px",
								height: "1.5px",
								background: "var(--text)",
								transition: "all 0.2s",
								opacity: menuOpen ? 0 : 1,
							}}
						/>
						<span
							style={{
								display: "block",
								width: "16px",
								height: "1.5px",
								background: "var(--text)",
								transition: "all 0.2s",
								transform: menuOpen
									? "rotate(-45deg) translate(4px, -4px)"
									: "none",
							}}
						/>
					</button>
				</div>
			</motion.nav>

			{/* Mobile dropdown menu */}
			<AnimatePresence>
				{menuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.2 }}
						style={{
							position: "fixed",
							top: "65px",
							left: 0,
							right: 0,
							zIndex: 49,
							backgroundColor: "var(--bg)",
							borderBottom: "1px solid var(--border)",
							padding: "16px 20px",
							display: "flex",
							flexDirection: "column",
							gap: "4px",
						}}
					>
						{navLinks.map((link) => (
							<a
								key={link.href}
								href={link.href}
								onClick={(e) => handleScroll(e, link.href)}
								style={{
									color: "var(--muted)",
									textDecoration: "none",
									fontSize: "13px",
									letterSpacing: "0.12em",
									textTransform: "uppercase",
									padding: "12px 16px",
									borderRadius: "4px",
									transition: "all 0.2s",
									border: "1px solid transparent",
								}}
								onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
									e.currentTarget.style.color = "var(--accent-g)";
									e.currentTarget.style.borderColor = "var(--border)";
									e.currentTarget.style.background = "var(--surface)";
								}}
								onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
									e.currentTarget.style.color = "var(--muted)";
									e.currentTarget.style.borderColor = "transparent";
									e.currentTarget.style.background = "transparent";
								}}
							>
								{link.label}
							</a>
						))}
					</motion.div>
				)}
			</AnimatePresence>

			{/* CSS to show/hide desktop vs mobile nav */}
			<style>{`
        @media (min-width: 768px) {
          .mobile-nav { display: none !important; }
          .desktop-nav { display: flex !important; }
        }
        @media (max-width: 767px) {
          .mobile-nav { display: flex !important; }
          .desktop-nav { display: none !important; }
          nav { padding: 16px 20px !important; }
        }
      `}</style>
		</>
	);
}
