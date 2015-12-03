Mails = new Mongo.Collection("mails", {connection:null});
new PersistentMinimongo(Mails, "ethereum_bounties-dapp");

Template.main.helpers({
	accounts: function() {
		return eth.accounts.map(function(a) { return {name: a, address: a} });
	},
});

Template.main.helpers({
	mainAccount: function() {
		return MailClient.from;
	},
});
