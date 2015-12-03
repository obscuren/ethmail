var emptyAddress = "0x0000000000000000000000000000000000000000";

Template.mail.helpers({
	mail: function() {
		console.log(Mails.findOne({hash: this.hash}));
		return Mails.findOne({hash: this.hash});
	}
});

Template.new_mail.events({
    "submit .new-mail": function(event) {
        event.preventDefault();

	var to = event.target.to.value;
	if( to.substr(0, 2) !== "0x" ) {
		var domain = EtherID.getDomain(web3.toHex(to));
		console.log(to, "translates to", domain[0]);
		if( domain[0] !== emptyAddress ) {
			to = domain[0];
		}
	}

	clients[this.address].send(to, event.target.subject.value, event.target.body.value);
    },
});

