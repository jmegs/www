"use cache";

import Blob from "./blob";

export default async function Home() {
	return (
		<>
			<div className="h-dvh text-3xl md:text-4xl leading-none">
				<div className="p-10">
					<h1>John Meguerian</h1>
					<p>Design Manager</p>
					<p>
						<br />© 2025
					</p>
				</div>
			</div>
			<Blob />
		</>
	);
}
