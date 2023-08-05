import Header from './Header';
import Main from './Main';
import Loader from './Loader';
import Error from './Error';
import StartScreen from './StartScreen';
import Question from './Question';
import NextButton from './NextButton';
import Progress from './Progress';
import FinishScreen from './FinishScreen';
import Timer from './Timer';
import { useQuiz } from '../context/QuizContext';

function App() {
	const { status } = useQuiz();

	return (
		<div className='app'>
			<Header />
			<Main>
				{status === 'loading' && <Loader />}
				{status === 'error' && <Error />}
				{status === 'ready' && <StartScreen />}
				{status === 'active' && (
					<>
						<Progress />
						<Question />
						<Timer />
						<NextButton />
					</>
				)}
				{status === 'finished' && <FinishScreen />}
			</Main>
		</div>
	);
}

export default App;

// fałszywe API można użyć npm i json-server
