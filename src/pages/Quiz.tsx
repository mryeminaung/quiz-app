import type { Question } from "@/types";
import axios from "axios";
import { decode } from "html-entities";
import { useEffect, useState } from "react";

type QuizQuestion = Question & {
	selected?: string;
};

export default function Quiz() {
	const [questions, setQuestions] = useState<QuizQuestion[]>([]);
	const [checked, setChecked] = useState(false);
	const [correctCount, setCorrectCount] = useState(0);

	const fetchQuiz = async () => {
		const res = await axios.get(
			"https://opentdb.com/api.php?amount=10&type=multiple",
		);
		const formattedQuestions = res.data.results.map((q: any) => ({
			...q,
			question: decode(q.question),
			answers: [q.correct_answer, ...q.incorrect_answers].sort(
				() => Math.random() - 0.5,
			),
			selected: undefined,
		}));
		setQuestions(formattedQuestions);
		setCorrectCount(0);
	};

	useEffect(() => {
		fetchQuiz();
	}, []);

	const handleSelect = (questionIdx: number, answer: string) => {
		// prevent changing after checking
		if (checked) return;
		setQuestions((prev) => {
			const prevSelected = prev[questionIdx].selected;
			const wasCorrect = prevSelected === prev[questionIdx].correct_answer;
			const isCorrect = answer === prev[questionIdx].correct_answer;

			if (wasCorrect && !isCorrect) {
				setCorrectCount((c) => c - 1);
			} else if (!wasCorrect && isCorrect) {
				setCorrectCount((c) => c + 1);
			}

			return prev.map((q, idx) =>
				idx === questionIdx ? { ...q, selected: answer } : q,
			);
		});
	};

	const handleAnswerCheck = () => {
		const isLeftUnselectedAns = questions.filter(
			(q) => q.selected === undefined,
		);

		if (isLeftUnselectedAns.length > 0) {
			alert(
				`You still have ${isLeftUnselectedAns.length == 1 ? "question" : "questions"}  to answer!`,
			);
		} else {
			const correct = questions.filter(
				(q) => q.selected === q.correct_answer,
			).length;
			setCorrectCount(correct);
			setChecked(true);
		}
	};

	const handlePlayAgain = () => {
		fetchQuiz();
		setChecked(false);
	};

	return (
		<div className="flex items-center justify-center">
			<div className="relative z-10 bg-white w-full max-w-2xl rounded-2xl shadow-sm p-10">
				{questions.map((question, index) => (
					<div key={index}>
						<h2 className="text-[#2D3E71] text-lg font-bold mb-4">
							{question.question}
						</h2>
						<div className="flex flex-wrap gap-3">
							{question.answers.map((q) => {
								let btnClass = "";
								if (checked && question.selected === q) {
									btnClass =
										q === question.correct_answer
											? "bg-green-200 border-green-600"
											: "bg-red-200 border-red-600";
								} else if (question.selected === q) {
									btnClass = "bg-[#DBE2F9] text-[#2D3E71]";
								} else {
									btnClass = "bg-transparent text-[#2D3E71] hover:bg-slate-50";
								}
								return (
									<button
										key={q}
										className={`px-5 py-1.5 rounded-full border border-[#2D3E71] text-sm font-medium transition-colors ${btnClass}`}
										onClick={() => handleSelect(index, q)}
										disabled={checked}>
										{q}
									</button>
								);
							})}
						</div>

						{/* Divider */}
						{index !== questions.length - 1 && (
							<div className="h-px bg-gray-100 my-3" />
						)}
					</div>
				))}

				<div className="flex flex-col items-center mt-6 gap-3">
					<p className="text-[#2D3E71] text-lg font-bold">
						{checked &&
							`You scored ${correctCount}/${questions.length} correct answers`}
					</p>
					<button
						onClick={checked ? handlePlayAgain : handleAnswerCheck}
						className="bg-[#5A67D8] hover:bg-[#4c51bf] text-white px-10 py-3 rounded-xl font-semibold text-lg transition-all shadow-md active:scale-95">
						{checked ? "Play again" : "Check answers"}
					</button>
				</div>
			</div>
		</div>
	);
}
