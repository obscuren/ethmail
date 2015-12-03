clients = {};
for(var i = 0; i < eth.accounts.length; i++) {
	clients[eth.accounts[i]] = new MailSystem(eth.accounts[i], function(mail) {
		var hash = auth.hash(mail.from, mail.to, web3.sha3(mail.body));
		mail.hash = hash;
		Mails.upsert(hash, mail);

		var content = "New mail: " + mail.subject;
		GlobalNotification.info({
			content: content, 
			duration: 5,
			okText: "open",
			ok: function() {
				FlowRouter.go("mail", {hash: hash});
				return true;
			},
		});
	});
}

FlowRouter.route("/", {
	name:"root",
	action: function(params) {
		BlazeLayout.render("main", {main: "mails", data: {address: eth.accounts[0]}});
	},
});

FlowRouter.route("/set/:address", {
	name:"set",
	action: function(params) {
		BlazeLayout.render("main", {main: "mails", data: {address: params.address}});
	}
});

FlowRouter.route("/:hash", {
	name:"mail",
	action: function(params) {
		BlazeLayout.render("main", {main: "mail", data: {hash: params.hash}});
	},
});
