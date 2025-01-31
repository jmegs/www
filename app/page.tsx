import Image from "next/image";
import profilePic from "@/assets/profile-pic.jpg";

export default function Home() {
	return (
		<main className="min-h-screen p-6 md:px-12 grid grid-rows-[auto_auto_auto_1fr] md:grid-rows-2 md:grid-cols-2 gap-y-1">
			<Image
				src={profilePic}
				alt="Profile Picture"
				sizes="(max-width: 48rem) 40px, 64px"
				className="h-10 md:h-16 w-10 md:w-16 object-cover rounded-full ring-ui ring-4 md:self-end mb-4 hover:rotate-3 transition-transform ease-spring duration-830"
			/>
			<h1 className="md:col-start-1 md:row-start-1 w-fit">John Meguerian</h1>
			<p className="md:col-start-2 md:row-start-1 w-fit">Design Manager</p>
			<div className="space-y-4 self-end mb-4 w-fit">
				<p>
					johnmeguerian <br />
					[at] gmail.com
				</p>
				<p>
					Brooklyn <br />
					New York <br />
					United States
				</p>
				<p>[ 40°70&apos;N,&nbsp;74°00&apos;W ]</p>
			</div>
		</main>
	);
}
