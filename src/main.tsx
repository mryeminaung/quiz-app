import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./layouts/RootLayout";
import Quiz from "./pages/Quiz";
import QuizTypeSelection from "./pages/QuizTypeSelection";
import QuizzicalStart from "./pages/QuizzicalStart";

let router = createBrowserRouter([
	{
		path: "/",
		Component: RootLayout,
		children: [
			{
				index: true,
				Component: QuizzicalStart,
			},
			{
				path: "quiz-type-selection",
				Component: QuizTypeSelection,
			},
			{
				path: "quiz",
				Component: Quiz,
			},
		],
	},
]);

createRoot(document.getElementById("root")!).render(
	<RouterProvider router={router} />,
);

// <StrictMode>
