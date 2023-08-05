import { useQuiz } from '../context/QuizContext';
import Options from './Options';
import React from 'react';

const Question = () => {
	const { questions, index } = useQuiz();
	const question = questions[index];

	return (
		<div>
			<h4>{question.question}</h4>
			<Options question={question} />
		</div>
	);
};

export default Question;
