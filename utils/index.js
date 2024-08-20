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
		const provider = await detectEthereumProvider();

		if (provider) {
			const accounts = await provider.request({
				method: 'eth_requestAccounts',
			});
			const firstAccount = accounts[0];
			console.log('Connected account:', firstAccount);
			return firstAccount;
		} else {
			console.log('Please install MetaMask!');
			alert(
				'MetaMask is not installed. Please install it to use this feature.'
			);
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