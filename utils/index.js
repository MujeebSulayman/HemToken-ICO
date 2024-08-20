import { ethers } from 'ethers';
import Web3Modal from 'web3modal';

import {
	TOKEN_ADDRESS,
	TOKEN_ABI,
	TOKEN_SALE_ABI,
	TOKEN_SALE_ADDRESS,
} from '../context/constants';

//CHECK IF WALLET IS CONNECTED FUNCTION
export const checkIfWalletConnected = async () => {
	try {
		if (!window.ethereum) return console.log('Install MetaMask');

		const accounts = await window.ethereum.request({
			method: 'eth_accounts',
		});

		const firstAccount = accounts[0];
		return firstAccount;
	} catch (error) {
		console.log(error);
	}
};

//CONNECT WALLET FUNCTION
export const connectWallet = async () => {
	try {
		// Check if MetaMask is installed
		if (!window.ethereum) {
			console.log('Install MetaMask');
			alert(
				'MetaMask is not installed. Please install it to use this feature.'
			);
			return;
		}

		// Request accounts from MetaMask
		const accounts = await window.ethereum.request({
			method: 'eth_requestAccounts',
		});

		const firstAccount = accounts[0];
		console.log('Connected account:', firstAccount);

		// Instead of reloading the page, set the address directly
		// This avoids issues with page reloads on mobile
		// Optionally, you can set this account in a global state or context
		return firstAccount;
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