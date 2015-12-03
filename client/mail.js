Template.mail.helpers({
	mail: function() {
		return Mails.findOne({hash: this.hash});
	}
});

Template.new_mail.events({
    "submit .new-mail": function(event) {
        event.preventDefault();

	console.log(event.target);
	clients[this.address].send(event.target.to.value, event.target.subject.value, event.target.body.value);
    },
});

