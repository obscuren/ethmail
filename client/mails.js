Template.mails.helpers({
	mails: function() {
		return Mails.find({to: this.address});
	},
});

