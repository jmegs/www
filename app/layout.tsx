import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "@/app/globals.css";
import { FathomAnalytics } from "./fathom";

const mondwest = localFont({
	src: "../assets/PPMondwest-Regular.woff2",
	display: "swap",
	fallback: ["Times New Roman", "serif"],
	adjustFontFallback: "Times New Roman",
});

export const metadata: Metadata = {
	title: "John Meguerian",
	description:
		"Design manager and front-end developer, based in New York City.",
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#fffcf0" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${mondwest.className} h-full`}>
			<body className="antialiased bg-bg text-tx selection:bg-tx selection:text-bg min-h-full">
				<FathomAnalytics />
				{children}
			</body>
		</html>
	);
}
