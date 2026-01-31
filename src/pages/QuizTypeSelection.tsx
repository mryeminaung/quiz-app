import { categories, difficulties, types } from "@/data";
import { useNavigate } from "react-router";

export default function QuizTypeSelection() {
	const navigate = useNavigate();

	return (
		<div className="border border-white/20 rounded-2xl bg-primary/10 backdrop-blur-md shadow-sm w-full p-5 md:p-10 max-w-3xl text-[#293264]">
			<div className="flex flex-col items-center">
				<h1 className="text-4xl font-bold mb-2">Quizzical</h1>
				<p className="text-md font-medium mb-5">
					Customize your trivia challenge 🧠
				</p>

				<div className="w-full space-y-4">
					{/* number of questions */}
					<div className="flex flex-col space-y-2">
						<label className="text-sm font-bold">Number of Questions:</label>
						<input
							type="number"
							min="1"
							max="50"
							placeholder="e.g. 10"
							className="w-full p-3 rounded-lg border-2 border-[#D6DBF5] bg-white focus:outline-none focus:border-primary"
						/>
					</div>

					{/* Trivia Category */}
					<div className="flex flex-col space-y-2">
						<label className=" text-sm font-bold">Select Category:</label>
						<select className="w-full p-3 rounded-lg border-2 border-[#D6DBF5] bg-white focus:outline-none focus:border-primary appearance-none cursor-pointer">
							{categories.map((category) => (
								<option
									key={category.id}
									value={category.id}>
									{category.name}
								</option>
							))}
						</select>
					</div>

					<div className="flex flex-col md:flex-row gap-4">
						{/* Trivia difficulties */}
						<div className="flex-1">
							<label className="block text-sm font-bold mb-1 ml-1">
								Difficulty:
							</label>
							<select className="w-full p-3 rounded-lg border-2 border-[#D6DBF5] bg-white focus:outline-none focus:border-primary cursor-pointer">
								{difficulties.map((difficulty) => (
									<option
										key={difficulty.id}
										value={difficulty.id}>
										{difficulty.name}
									</option>
								))}
							</select>
						</div>

						{/* Trivia type */}
						<div className="flex-1">
							<label className="block text-sm font-bold mb-1 ml-1">Type:</label>
							<select className="w-full p-3 rounded-lg border-2 border-[#D6DBF5] bg-white focus:outline-none focus:border-primary cursor-pointer">
								{types.map((type) => (
									<option
										key={type.id}
										value={type.id}>
										{type.name}
									</option>
								))}
							</select>
						</div>
					</div>
				</div>

				<button
					onClick={() => navigate("/quiz")}
					className="mt-10 rounded-2xl bg-primary px-16 py-4 text-secondary font-semibold shadow-md transition-all hover:brightness-110 active:scale-95">
					Start quiz
				</button>
			</div>
		</div>
	);
}
