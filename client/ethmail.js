var authContract = web3.eth.contract([{"constant":true,"inputs":[{"name":"signer","type":"address"},{"name":"recipient","type":"address"},{"name":"hash","type":"bytes32"}],"name":"hash","outputs":[{"name":"","type":"bytes32"}],"type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"p","type":"address"},{"name":"hash","type":"bytes32"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"verify","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"type":"function"},{"inputs":[],"type":"constructor"}]);

var address = "0xbd88dc6293d6c699c8fef8b892a17be597e98db5";
auth = authContract.at(address);

function sign(signer, recipient, content) {
	var sig = eth.sign(signer, auth.hash(signer, recipient, web3.sha3(content)));
	sig = sig.substr(2, sig.length);

	var res = {};
	res.r = "0x" + sig.substr(0, 64);
	res.s = "0x" + sig.substr(64, 64);
	res.v = web3.toHex( web3.toDecimal(sig.substr(128, 2)) + 27 );

	return res
}

var appName = "ethmail";

var MailSystem = function(from, cb) {
	this.from = from;
	this.filters = [];
	this.cb = cb;

	this.watch(from);
};
window.MailSystem = MailSystem;

MailSystem.prototype.watch = function(from) {
	var self = this;
	var filter = shh.filter({topics:[appName, from]}, function(error, res) {
		if(error) {
			console.log(error);
			return;
		}
		var content;
		try {
			content = JSON.parse(web3.toAscii(res.payload));
		} catch(e) {
			console.log(e);
			return;
		}

		var hash = auth.hash(content.from, content.to, web3.sha3(content.body));
		var valid = auth.verify(content.from, hash, content.sig.v, content.sig.r, content.sig.s);
		if(!valid) {
			console.log("Invalid signature");
			return;
		}

		self.cb(content);
		console.log("RX MSG:", content);
	});
	this.filters.push(filter);
}

MailSystem.prototype.send = function(to, subject, body) {
	var sig = sign(this.from, to, body);
	var content = web3.toHex(JSON.stringify({
		from: this.from,
		to: to,
		subject: subject,
		body: body,
		sig: sig
	}));

	shh.post({topics:[appName, to], payload: content});
};
