import React from 'react';
import { useStateContext } from '../Context/index';

const index = () => {
	const { TOKEN_ICO } = useStateContext();

	return (
    <div>Hey</div>
  )
};

export default index;
