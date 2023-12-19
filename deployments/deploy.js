async function main() {
	const Greeting = await ethers.getContractFactory('Greeting');
	const greeting = await Greeting.deploy();
	console.log('Contract Deployed to Address:', greeting.address);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
