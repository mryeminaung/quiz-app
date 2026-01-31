import axios from "axios";
import { useEffect } from "react";

export default function Quiz() {
	useEffect(() => {
		const fetchQuiz = async () => {
			const res = await axios.get("https://opentdb.com/api.php?amount=10");
			console.log(res);
		};
		fetchQuiz();
	}, []);

	return <div>Comming Soon!</div>;
}
