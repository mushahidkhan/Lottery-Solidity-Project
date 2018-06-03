const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile.js')
const provider = new HDWalletProvider('later bone minor defense buddy aerobic lamp admit fine ancient ability exact','https://rinkeby.infura.io/o4RYptAjJ3t1NBIbA34s ');
const web3 = new Web3(provider);

const deploy = async () => {
	const accounts = await web3.eth.getAccounts();
	console.log('Attempting to deploye from account', accounts[0]);

	const result = await new web3.eth.Contract(JSON.parse(interface))
	.deploy({ data: '0x' + bytecode, arguments: ['Hello world']})
	.send({ from: accounts[0], gas: '1000000'});
	console.log('Contract deployed to ', result.options.address);
}

deploy();
