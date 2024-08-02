const hre = require('hardhat');
const { ethers } = require('ethers');

const tokens = (nToken) => {
	return ethers.utils.parseUnits(nToken.toString(), 'ether');
};

async function main() {
	// Token Contract
	const _initialSupply = tokens(100000000);

	const HemTokenLaunch = await hre.ethers.getContractFactory('HemTokenLaunch');
	const hemTokenLaunch = await HemTokenLaunch.deploy(_initialSupply);

	await hemTokenLaunch.deployed();
	console.log(`HemTokenLaunch: ${hemTokenLaunch.address}`);

	
	// Token Sales Contract
	const _tokenPrice = tokens(1);

	const TokenSale = await hre.ethers.getContractFactory('TokenSale');
	const tokenSale = await TokenSale.deploy(hemTokenLaunch.address, _tokenPrice);

	await tokenSale.deployed();
	console.log(`TokenSale: ${tokenSale.address}`);
}

main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
