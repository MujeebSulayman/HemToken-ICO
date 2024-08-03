import React, { useState, useEffect, createContext, useContext } from 'react';
import { ethers } from 'ethers';
import {
	checkIfWalletConnected,
	connectWallet,
	connectingTOKENCONTRACT,
	getBalance,
	connectingTOKEN_SALE_CONTRACT,
} from '../Utils/index';
import { getAddress } from 'ethers/lib/utils';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
	const TOKEN_ICO = 'TOKEN SELL DAPP';

	const [address, setAddress] = useState('');
	const [balance, setBalance] = useState('');
	const [nativeToken, setNativeToken] = useState('');
	const [tokenHolders, setTokenHolders] = useState([]);
	const [tokenSale, setTokenSale] = useState('');
	const [currentHolder, setCurrentHolder] = useState('');

	const fetchInitialData = async () => {
		try {
			const account = await checkIfWalletConnected();
			const balanace = await getBalance();
			setBalance(ethers.utils.formatEther(balanace.toString()));
			setAddress(account);

			const TOKEN_CONTRACT = await connectingTOKENCONTRACT();
			let tokenBalance;

			if (account) {
				tokenBalance = await TOKEN_CONTRACT.balanaceOf(account);
			} else {
				tokenBalance = 0;
			}

			const tokenName = await TOKEN_CONTRACT.name();
			const tokenSymbol = await TOKEN_CONTRACT.symbol();
			const tokenTotalSupply = await TOKEN_CONTRACT.totalSupply();
			const tokenStandard = await TOKEN_CONTRACT.standard();
			const tokenHolders = await TOKEN_CONTRACT._userId();
			const tokenOwnerOfContract = await TOKEN_CONTRACT.ownerOfContract();
			const tokenAddress = await TOKEN_CONTRACT.address();

			const nativeToken = {
				tokenAddress: tokenAddress,
				tokenName: tokenName,
				tokenSymbol: tokenSymbol,
				tokenTotalSupply: ethers.utils.formatEther(tokenTotalSupply.toString()),
				tokenStandard: tokenStandard,
				tokenOwnerOfContract: tokenOwnerOfContract,
				tokenBalance: ethers.utils.formatEther(tokenBalance.toString()),
				tokenHolders: tokenHolders.toNumber(),
			};

			setNativeToken(nativeToken);

			//Get token Holders
			const getTokenHolder = await TOKEN_CONTRACT.getTokenHolder();
			setTokenHolders(getTokenHolder);

			//Get Token holder Data
			if (account) {
				const getTokenHolderData = await TOKEN_CONTRACT.getTokenHolderData(
					account
				);

				const currentHolder = {
					tokenId: getTokenHolderData[0].toNumber(),
					from: getTokenHolderData[1],
					to: getTokenHolderData[2],
					totalToken: ethers.utils.formatEther(getTokenHolderData[3].toString),
					tokenHolder: getTokenHolderData[4],
				};
				setCurrentHolder(currentHolder);
			}

			//TOKEN SALES CONTRACT
			const TOKEN_SALE_CONTRACT = await connectingTOKEN_SALE_CONTRACT();

			const [tokenPrice, setTokenPrice] = TOKEN_SALE_CONTRACT.tokenPrice();
			const [tokenSold, setTokenSold] = TOKEN_SALE_CONTRACT.tokenSold();
			const [tokenSaleBalance, setTokenSaleBalance] =
				TOKEN_SALE_CONTRACT.balanceOf(
					'0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'
				);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchInitialData();
	}, []);

	return (
		<StateContext.Provider value={{ TOKEN_ICO }}>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
