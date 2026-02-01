import { Outlet } from "react-router";
import BotBlob from "../assets/bot-blob.png";
import TobBlob from "../assets/top-blob.png";

export default function RootLayout() {
	return (
		<div className="relative min-h-screen w-full overflow-hidden bg-secondary">
			<img
				src={TobBlob}
				className="absolute -right-30 -top-40"
			/>
			<img
				src={BotBlob}
				className="absolute -bottom-30 -left-30"
			/>

			<main className="min-h-screen p-5 border-4 border-dotted border-primary flex flex-col items-center justify-center">
				<Outlet />
			</main>
		</div>
	);
}
