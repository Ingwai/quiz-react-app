import React from 'react';

const Progress = ({ index, numQuestions, points, maxPossiblePoints, answer }) => {
	return (
		<header className='progress'>
			<progress max={numQuestions} value={index + Number(answer !== null)} />
			{/* Number(answer !== null) z takiego zapisu dostajemy jeśli będzie odpowiedź dostaniemy true które zamienione na Number daje nam 1 czyli dodajemy index + 1*/}
			<p>
				Question <strong>{index + 1}</strong>/<strong>{numQuestions}</strong>
			</p>
			<p>
				<strong>{points}</strong> / {maxPossiblePoints}
			</p>
		</header>
	);
};

export default Progress;
