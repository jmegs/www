"use cache"

import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import Fathom from "./fathom"

const nudge = localFont({
	src: "./vc-nudge.woff2",
	variable: "--font-nudge",
})

export const metadata: Metadata = {
	title: "John Meguerian",
	description: "Design Manager",
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${nudge.variable}`}>
				<Fathom />
				{children}
			</body>
		</html>
	)
}
