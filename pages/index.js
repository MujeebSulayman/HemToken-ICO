import { useStateContext } from '../context/index';

const index = () => {
	const { TOKEN_ICO, transferNativeToken } = useStateContext();

	return (
		
		<div>
			<div>{TOKEN_ICO}</div>
			<button onClick={() => transferNativeToken()}> Transfer </button>
		</div>
	);
};

export default index;
