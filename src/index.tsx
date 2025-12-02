import { Blob } from "./blob";

export const IndexPage = () => (
	<main>
		<div className="h-svh antialiased leading-tight text-lg">
			<div className="p-10 h-full flex flex-col">
				<div className="mb-4 md:mt-auto tracking-wide border w-fit px-5 py-4 -rotate-1">
					<h1>john meguerian</h1>
					<p>design manager</p>
					<p>new york city</p>
					<p>johnmeguerian@gmail.com</p>
				</div>
			</div>
		</div>
		<Blob />
	</main>
);

