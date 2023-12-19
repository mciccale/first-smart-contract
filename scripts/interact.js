require('dotenv').config();
const { ethers } = require('ethers');
const contractABI = require('../artifacts/contracts/Greeting.sol/Greeting.json');

const { API_URL, CONTRACT_ADDRESS, PRIVATE_KEY } = process.env;

async function main() {
	const provider = new ethers.providers.JsonRpcProvider(API_URL); // Replace with your RPC URL
	const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

	const greetingContract = new ethers.Contract(
		CONTRACT_ADDRESS,
		contractABI.abi,
		wallet
	);

	let greetings = await greetingContract.getGreetings();
	console.log(`Initial greetings: ${greetings}!`);

	const tx = await greetingContract.greet();
	await tx.wait();
	console.log('Greeted!');

	greetings = await greetingContract.getGreetings();
	console.log(`Final greetings: ${greetings}!`);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
