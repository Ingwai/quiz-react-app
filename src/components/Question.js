import Options from './Options';
import React from 'react';

const Question = ({ question, dispatch, answer, points }) => {
	return (
		<div>
			<h4>{question.question}</h4>
			<Options question={question} dispatch={dispatch} answer={answer} points={points} />
		</div>
	);
};

export default Question;
