if(typeof web3 === 'undefined')
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
else
  web3 = new Web3(web3.currentProvider);

eth = web3.eth;
shh = web3.shh;
