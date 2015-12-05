var emptyAddress = "0x0000000000000000000000000000000000000000";

Template.mail.helpers({
	mail: function() {
		return Mails.findOne({hash: this.hash});
	},

	avatar: function(mail) {
		var url = web3.toUtf8(ethid.query(mail.from, "avatar"));
		if(url.length > 0) {
			return "<img src='"+url+"'>";
		}
	}
});

Template.new_mail.events({
    "submit .new-mail": function(event) {
        event.preventDefault();

	var to = event.target.to.value;
	if( to.substr(0, 2) !== "0x" ) {
		var name = ethid.lookup(to)
		if( name !== emptyAddress ) {
			to = name 
		}
	}

	clients[this.address].send(to, event.target.subject.value, event.target.body.value);
    },
});

Template.mails.events({
	"click .mail": function(event) {
		FlowRouter.go("/" + $(event.currentTarget).data("hash"));
	},
});
