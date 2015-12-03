# Ethmail

[EthMail](http://ethmail.io) is a whisper / ethereum mailing system.

It requires your node to have whisper enabled (`--shh --rpc --rpcapi "db,eth,net,web3,shh" --rpccorsdomain "http://ethmail.io"` or just use `mist` which works out of the box). Please note that the whisper messages are extremely short lived (**for now**) and you will loose messages if you're not online. 

Please also unlock the account from which you'd like to send messages. It's required by `eth.sign` which proofs messages authenticity.
