import styles from "./style.css?url";

export const StaticDocument = ({ children }) => (
	<html lang="en">
		<head>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />

			<link
				rel="preconnect"
				href="https://use.typekit.net"
				crossOrigin="anonymous"
			/>
			<link
				rel="preconnect"
				href="https://p.typekit.net"
				crossOrigin="anonymous"
			/>
			<link
				rel="preconnect"
				href="https://use.typekit.com"
				crossOrigin="anonymous"
			/>
			<link rel="stylesheet" href="https://use.typekit.net/tvi2kjb.css" />
			<link rel="stylesheet" href={styles} />
			{import.meta.env.PROD && (
				<script
					src="https://cdn.usefathom.com/script.js"
					data-site="TVQPDWBA"
					defer
				/>
			)}
		</head>
		<body>
			<div id="root">{children}</div>
		</body>
	</html>
);
