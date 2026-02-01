export type TriviaQuiz = {
	id: string;
	name: string;
};

export type Question = {
	type: string;
	question: string;
	category: string;
	difficulty: string;
	correct_answer: string;
	answers: string[];
	incorrect_answers: string[];
};
