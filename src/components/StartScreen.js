import React from 'react';
import { useQuiz } from '../context/QuizContext';

const StartScreen = () => {
	const { numQuestions, dispatch } = useQuiz();

	const handleStartQuiz = () => {
		dispatch({ type: 'start' });
	};

	return (
		<div className='start'>
			<h2>Welcome to The React Quiz!</h2>
			<h3>{numQuestions} questions to test your React mastery</h3>
			<button className='btn btn-ui' onClick={handleStartQuiz}>
				Let's start
			</button>
		</div>
	);
};

export default StartScreen;
