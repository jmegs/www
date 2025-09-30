"use cache";

import type { Metadata } from "next";
import "./globals.css";
import Fathom from "./fathom";

export const metadata: Metadata = {
	title: "John Meguerian",
	description: "Design Manager",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://use.typekit.net" />
				<link
					rel="preload"
					as="style"
					href="https://use.typekit.net/tvi2kjb.css"
				/>
				<link rel="stylesheet" href="https://use.typekit.net/tvi2kjb.css" />
			</head>
			<body>
				<Fathom />
				{children}
			</body>
		</html>
	);
}
