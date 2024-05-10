import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app"
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className="h-full" suppressHydrationWarning>
			<body className="flex min-h-full flex-col py-10 container mx-auto">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<header className="flex justify-between">
						<div className="ml-auto">
							<ModeToggle />
						</div>
					</header>
					<main className="grow">{children}</main>
				</ThemeProvider>
			</body>
		</html>
	)
}
