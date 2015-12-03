if(typeof web3 === 'undefined')
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
else
  web3 = new Web3(web3.currentProvider);

web3._extend({
	property: 'eth',
	methods: [
		new web3._extend.Method({
			name: 'sign',
			call: 'eth_sign',
			params: 2,
			inputFormatter: [web3._extend.utils.toAddress, null]
		}),
	]
});

eth = web3.eth;
shh = web3.shh;
