import { useNavigate } from "react-router";

export default function QuizzicalStart() {
	const navigate = useNavigate();

	return (
		<div className="flex flex-col max-w-xl mx-auto text-center items-center justify-center">
			<h1 className="text-4xl font-bold text-[#293264] mb-3">Quizzical</h1>
			<p className="text-[#293264] text-lg mb-8">
				Put your knowledge to the ultimate test. Select your answers and see if
				you're a true trivia master
			</p>
			<button
				onClick={() => navigate("/quiz-type-selection")}
				className="bg-primary hover:bg-primary/90 hover:cursor-pointer text-white font-medium py-4 px-16 rounded-2xl transition-all active:scale-95 shadow-md">
				Get Started
			</button>
		</div>
	);
}
