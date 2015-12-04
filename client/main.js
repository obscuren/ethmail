Mails = new Mongo.Collection("mails", {connection:null});
new PersistentMinimongo(Mails, "ethereum_ethmail-dapp");

Template.main.helpers({
	accounts: function() {
		return eth.accounts.map(function(a) { return {name: a, address: a} });
	},

	mainAccount: function() {
		return MailClient.from;
	},
});

Template.main.events({
    "change .account-select": function(event) {
        event.preventDefault();

	FlowRouter.go("set", {address:event.target.value});
    },
});

