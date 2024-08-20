import { ethers } from 'ethers';
import Web3Modal from 'web3modal';
import detectEthereumProvider from '@metamask/detect-provider';

import {
	TOKEN_ADDRESS,
	TOKEN_ABI,
	TOKEN_SALE_ABI,
	TOKEN_SALE_ADDRESS,
} from '../context/constants';

//CHECK IF WALLET IS CONNECTED FUNCTION


export const checkIfWalletConnected = async () => {
	try {
		const provider = await detectEthereumProvider();

		if (!provider) {
			console.log('Install MetaMask');
			alert(
				'MetaMask is not installed. Please install it to use this feature.'
			);
			return null;
		}

		const accounts = await provider.request({
			method: 'eth_accounts',
		});

		if (accounts.length > 0) {
			const firstAccount = accounts[0];
			console.log('Wallet is connected:', firstAccount);
			return firstAccount;
		} else {
			console.log('No accounts found');
			return null;
		}
	} catch (error) {
		console.log('Error checking wallet connection:', error);
	}
};


//CONNECT WALLET FUNCTION
export const connectWallet = async () => {
	try {
		const provider = await detectEthereumProvider();

		if (!provider) {
			console.log('Install MetaMask');
			alert(
				'MetaMask is not installed. Please install it to use this feature.'
			);
			return null;
		}

		const accounts = await provider.request({
			method: 'eth_requestAccounts',
		});

		if (accounts.length > 0) {
			const firstAccount = accounts[0];
			console.log('Connected account:', firstAccount);
			// No need to reload the page, just return the account
			return firstAccount;
		} else {
			console.log('No accounts found');
			return null;
		}
	} catch (error) {
		console.log('Error connecting wallet:', error);
		alert('Failed to connect wallet. Please try again.');
	}
};


// COMMUNICATION WITH THE SMART CONTRACT
// FIRST WE COMMUNICATE WITH THE TOKEN CONTRACT
//TOKEN CONTRACT
const fetchtokenContract = (signerOrProvider) =>
	new ethers.Contract(TOKEN_ADDRESS, TOKEN_ABI, signerOrProvider);

export const connectingTOKENCONTRACT = async () => {
	try {
		const web3modal = new Web3Modal();
		const connection = await web3modal.connect();
		const provider = new ethers.providers.Web3Provider(connection);
		const signer = provider.getSigner();
		const contract = fetchtokenContract(signer);
		return contract;
	} catch (error) {
		console.log(error);
	}
};

//GET BALANCE
export const getBalance = async () => {
	try {
		const web3modal = new Web3Modal();
		const connection = await web3modal.connect();
		const provider = new ethers.providers.Web3Provider(connection);
		const signer = provider.getSigner();

		return await signer.getBalance();
	} catch (error) {
		console.log(error);
	}
};


//TOKEN SALE CONTRACT

const fetchtoken_SALE_contract = (signerOrProvider) =>
	new ethers.Contract(TOKEN_SALE_ADDRESS, TOKEN_SALE_ABI, signerOrProvider);

export const connectingTOKEN_SALE_CONTRACT = async () => {
	try {
		const web3modal = new Web3Modal();
		const connection = await web3modal.connect();
		const provider = new ethers.providers.Web3Provider(connection);
		const signer = provider.getSigner();
		const contract = fetchtoken_SALE_contract(signer);
		return contract;
	} catch (error) {
		console.log(error);
	}
};