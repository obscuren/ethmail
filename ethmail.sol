contract Auth {
	address public owner;

	function Auth() {
		owner = msg.sender;
	}

	function hash(address signer, address recipient, bytes32 hash) constant returns(bytes32) {
		return sha3(signer, recipient, hash);
	}

	function verify(address p, bytes32 hash, uint8 v, bytes32 r, bytes32 s) constant returns(bool) {
		return ecrecover(hash, v, r, s) == p;
	}

	function kill() {
		suicide(owner);    
	}
}
